"""Gera a trilha instrumental original Neon Afterhours, sem samples externos."""
import math
import wave
from pathlib import Path
import numpy as np

sr = 22050
beat = 60 / 110
length = beat * 64
n = int(length * sr)
t = np.arange(n) / sr
mix = np.zeros(n)
rng = np.random.default_rng(42)

def add(start, sound, level=1):
    offset = int(start * sr)
    count = min(len(sound), n - offset)
    if count > 0:
        mix[offset:offset + count] += sound[:count] * level

def tone(midi):
    return 440 * 2 ** ((midi - 69) / 12)

roots = [40, 36, 43, 38]
for bar in range(16):
    root = roots[(bar // 2) % 4]
    start = bar * 4 * beat
    # Acordes sustentados com osciladores levemente desafinados.
    u = np.arange(int(4.5 * beat * sr)) / sr
    pad = np.zeros(len(u))
    for interval in [0, 7, 12, 15]:
        f = tone(root + 12 + interval)
        pad += np.sin(2 * math.pi * f * u) + .4 * np.sin(2 * math.pi * f * 1.003 * u)
    env = np.minimum(u / .3, 1) * np.minimum((u[-1] - u) / .5, 1)
    add(start, pad * env, .035)
    for step in range(8):
        u = np.arange(int(beat * .48 * sr)) / sr
        f = tone(root)
        bass = sum(np.sin(2 * math.pi * f * k * u) / k for k in range(1, 7))
        env = np.minimum(u / .008, 1) * np.exp(-u * 10)
        add(start + step * beat / 2, bass * env, .17)
        if bar >= 2:
            f = tone(root + 24 + [0, 7, 12, 15, 12, 7, 19, 7][step])
            lead = (np.sin(2 * math.pi * f * u) + .25 * np.sin(4 * math.pi * f * u)) * env
            add(start + step * beat / 2, lead, .095)
            add(start + step * beat / 2 + beat * .75, lead, .028)
    for pulse in range(4):
        at = start + pulse * beat
        u = np.arange(int(.32 * sr)) / sr
        kick = np.sin(2 * math.pi * (48 * u + 90 * .035 * (1 - np.exp(-u / .035)))) * np.exp(-u * 15)
        add(at, kick, .55)
        if pulse % 2:
            noise = rng.normal(0, 1, len(u))
            snare = (noise * .45 + np.sin(2 * math.pi * 180 * u) * .25) * np.exp(-u * 24)
            add(at, snare, .22)
    for step in range(8):
        u = np.arange(int(.07 * sr)) / sr
        noise = rng.normal(0, 1, len(u))
        hat = np.diff(noise, prepend=0) * np.exp(-u * 75)
        add(start + step * beat / 2, hat, .035 if step % 2 else .022)

mix *= np.minimum(t / 1.3, 1) * np.minimum((length - t) / 2.5, 1)
mix = np.tanh(mix * 1.1)
mix *= .87 / max(np.max(np.abs(mix)), .001)
output = Path(__file__).resolve().parent.parent / 'public' / 'neon-afterhours.wav'
with wave.open(str(output), 'wb') as audio:
    audio.setparams((1, 2, sr, 0, 'NONE', 'not compressed'))
    audio.writeframes((mix * 32767).astype('<i2').tobytes())
print(f'{output.name}: {length:.1f}s, peak {np.max(np.abs(mix)):.2f}')
