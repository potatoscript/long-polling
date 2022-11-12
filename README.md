## Using the Fetch API
Fetch API は、要求や応答など、プロトコルの一部にアクセスして操作するための JavaScript インターフェイスを提供します。 <br>
また、ネットワーク全体でリソースを非同期asynchronouslyに取得するための簡単で論理的な方法を提供するグローバルな fetch() メソッドも提供します。

この種の機能は、以前は XMLHttpRequest を使用して実現されていました。 <br>
Fetch は、Service Worker などの他のテクノロジで簡単に使用できる、より優れた代替手段を提供します。 <br>
Fetch は、CORS や HTTP の拡張機能など、他の HTTP 関連の概念を定義するための単一の論理的な場所も提供します。

```javascript
fetch("/poll")
.then((res)=>res.text())
.then((message)=>(document.getElementById("message").innerHTML += `${message} <br>`))
.finally(()=>poll());
```


