Starting on <a href="https://github.com/rsksmart/rskj/releases/tag/ORCHID-0.6.2" target="_blank">RSK ORCHID v0.6.2</a>, you can export the blockchain to a graph format file so you can view it using a graph viewer program.

### Follow these instructions:

1. Generate the .tgf file

>* Run the command below

```
curl -s -X POST -H "Content-Type: application/json" -d '{"jsonrpc":"2.0","method":"ext_dumpBlockchain", "params": [50, false], "id":"curldump"}' http://rskjnodeUrl:4444
```

>* The first parameter is the number of blocks to go back from the best block.

>* The second parameter is whether to include links to uncle nodes (The recommended value for this parameter is false, because otherwise the graph may be too complicated to understand).

>* A file will be generated in the computer where rskj node is running: user.dir/rskblockchain.tgf.

2. Transfer the file to your computer if the RSK node is not running in your computer.

3. Open rskblockchain.tgf with a graph viewer program.

>* The recommended graph viewer program is <a href="http://www.yworks.com/downloads#yEd" target="_blank">yEd</a>.
>* To visualize the graph in yEd, follow these instructions:
>* Install and run yEd.
>* Open rskblockchain.tgf
>* In the tgf import popup, don't check any checkbox, just press ok.
>* Make the graph to be shown on a tree layout
>>* Go to Layout / Tree
>>* In the directed tab select:
>>>* Minimal node distance: 100
>>>* Orientation: Bottom to top