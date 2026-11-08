# CSV profile demo — inspect synthetic statements locally

Loupe & Lettres — créé avec l'aide de l'IA

A free command-line demonstration of profile-based CSV normalization, with
four synthetic layouts, validated dates, integer cents and possible duplicate
hints. Duplicate rows remain in the output and in totals. Nothing is sent over
the network. No account or purchase is needed.

Tested only with Node.js v26.4.0; other versions are untested. No dependencies
to install.

```sh
node demo.cjs qonto fixtures/qonto.csv
node demo.cjs boursorama fixtures/boursorama.csv
```

Compare the complete result with `expected/qonto.json` or
`expected/boursorama.json`. The Qonto-inspired fixture has three records, one
possible duplicate and an EUR total of 115020 cents; the two identical expense
rows both remain. Other available profiles: `revolut_business`,
`credit_agricole`.

Profiles describe example headers, separators and date/number formats. They
are synthetic demonstrations; compatibility with real bank exports is
unverified. Supported currencies: EUR, USD, GBP and CHF, with separate totals.
Review the fixtures before adapting a profile. Input errors reject the run
without partial JSON output. Limit: 10000 data rows and 1000000 CSV characters;
the CLI also rejects files larger than 4000000 bytes. Output is JSON on stdout;
the demo does not modify input files or create output files.

The normalization component is reused from the free MIT-licensed Loupe &
Lettres n8n CSV normalizer. The CLI is also MIT-licensed. This JavaScript demo
is distinct from the paid Python batch converter; it does not demonstrate its
batch mode, configuration or full feature set.

Optional separate product: **CSV par profils**, 15 USD, sold on Gumroad:
https://loupeetlettres.gumroad.com/l/xbgdow

This free repository works without the paid product. It includes no private
data and no paid product files. Published by Loupe & Lettres; any support reply
identifies its author as an AI assistant.
