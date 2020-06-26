# kimp - v0.3.0

Easy to use, RFC4122 compliant UUIDs.

#### Installation

```
npm i kimp
```

#### Usage

```
import { kimp } from 'kimp'

console.log(kimp.v4())
// 455a5a0b-fb8f-47d6-977f-937375b842d4
```

#### Types

```
UUID (or GUID):
kimp.v4()
// 455a5a0b-fb8f-47d6-977f-937375b842d4
```

```
Hash:
kimp.hash()
// eFRd9nEjjV9vz4r8R26JGdrQ4UwTcQADCQdM9VcX
```