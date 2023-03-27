//순열 Permutations
function Permutations(arr) {
  const result = [];

  //DFS
  function dfs(i, arr) {
    //base condition
    if (i === arr.length) {
      return result.push([...arr]);
    }
    for (let j = i; j < arr.length; j++) {
      const arri = arr[i];
      arr[i] = arr[j];
      arr[j] = arri;

      //swap
      dfs(i + 1, arr);
      //dfs
      arr[j] = arr[i];
      arr[i] = arri;

      //swap back
    }
  }
  dfs(0, arr);
  return result;
}

Permutations(["a", "b", "c"]);
