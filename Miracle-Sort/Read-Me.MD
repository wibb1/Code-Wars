Made https://www.reddit.com/r/ProgrammerHumor/comments/6ywnnm/miracle_sort/ in to a kata.

A poor guy lost the Array::sort method for some reason, and he wrote the following code, hoping the miracle will come true.
```javascript
const miracleSort = arr =>
{
    var result = [...arr]
    var sorted = false
    do
    {
        sorted = true
        for (var i = 1;i < result.length;++i)
            if (result[i] < result[i - 1])
            {
                sorted = false
                break
            }
    }
    while (!sorted)
    return result
}
```
As a god of JS, please help the poor guy.

About tests. All test arrays will only contains non-negative integers, and the length will be less than 100.

Have fun O_o