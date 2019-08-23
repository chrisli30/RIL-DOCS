## Step 4 : Compile and Deploy Contracts

<style>
  img{
    margin:0 auto;
    width:80%;
  }
</style>

Truffle and Ganache provides a development environment, testing framework and asset pipeline for blockchains. 


#### Install Truffle
- Navigate to under /truffle
```shell
cd truffle
```

- Install the required dependencies for ganache
```shell
npm install
```

Open the truffle-config.js file in the truffle directory. Locate the following part under networks. This part tells Truffle how to connect to our RegNet node.
```javascript
regtest: {
    provider: new PrivateKeyProvider(privateKey,  "http://127.0.0.1:4444"),
    host: "127.0.0.1",
    port: 4444,
    network_id: 33,
}
```


#### Install Ganache

- Navigate to under /ganache
```shell
cd ganache
```

- Install the required dependencies for ganache
```shell
npm install
```

- Start Ganache in development environment
```shell
npm start
```
