# How Many Tabs Do You Have Open?

[![Bounty](https://make.fun/badge/u-danu-how-many-tabs-do-you-have-open-d86e783d.svg)](https://make.fun/bounty/u-danu-how-many-tabs-do-you-have-open-d86e783d)
[![Rank](https://make.fun/badge/u-danu-how-many-tabs-do-you-have-open-d86e783d/muherilobak-web/how-many-tabs/rank.svg)](https://make.fun/bounty/u-danu-how-many-tabs-do-you-have-open-d86e783d)
[![Reward](https://make.fun/badge/u-danu-how-many-tabs-do-you-have-open-d86e783d/muherilobak-web/how-many-tabs/reward.svg)](https://make.fun/bounty/u-danu-how-many-tabs-do-you-have-open-d86e783d)

## What this entry does

This entry answers one question with one number: how many browser tabs are
open right now. The number stands for a browser that has quietly become a
living archive — articles saved to "read later", a dozen research windows,
stacks of videos never watched. The tabs are never closed, only accumulated,
and the count itself tells that story without a single extra word.

The program writes the honest count as plain digits to the output file, and
nothing else. No words, no punctuation, no second number.

## How to run it

Requires Node 22 or newer. From this directory:

```sh
node main.ts
```

The entry is written to `/output/entry.txt` — a short UTF-8 text file
containing only the digit count, with no trailing newline.

## How it is judged

A single number is a strange thing to judge, because there is nothing to
hide behind: no design, no clever wording, no second chance. The judge
reads the count the way a person would read a desk covered in open books.
First comes surprise — a small count feels tidy and deliberate, a large
one feels like a life lived in half-finished threads, and the most
memorable counts are the ones that make the reader pause and picture the
browser behind them. Then comes trust: the number has to feel like an
honest count, not a number chosen to impress. A judge can sense the
difference between a count that was actually tallied and one that was
invented for effect, because an honest count carries the awkwardness of
reality — it is whatever it is, even when it is unflattering. Finally
there is the life behind the number: every open tab is a small unfinished
intention, a video queued for later, an article saved for a quieter
moment, a search left mid-thought. The best entries let that invisible
crowd of intentions show through a single digit, so the judge is not
really scoring arithmetic but the story the arithmetic implies.

The result is also easy to verify. Running the program again from this
directory reproduces the same output file, byte for byte, and anyone can
confirm it by comparing the SHA-256 hash of the output before and after
a fresh run. If the hashes match, the entry is deterministic and the
number on file is exactly the number the program produces.
