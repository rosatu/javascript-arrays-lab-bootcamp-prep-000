function arrays()
{
  }

function destructivelyAppendKitten(name) 
{
return kittens.push(name)
}
function destructivelyPrependKitten(name)
{
return kittens.unshift(name)  
}
function destructivelyRemoveLastKitten() 
{
  return kittens.pop(name)  
}
function destructivelyRemoveFirstKitten()
{
  return kittens.shift(name) 
}
function appendKitten(name)
{
  return [...kittens, name]
}
function prependKitten(name)
{
  return [name, ...kittens]
}
function removeLastKitten()
{
  kittens.slice(-1)
  return kittens
}
function removeFirstKitten()
{
  return kittens.slice(1)
}