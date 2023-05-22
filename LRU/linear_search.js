const arr = [40, 32, 54, 20, 90, 10, 70] //unsorted

// where is the number 90?

const target = 40
const len = arr.length

for(let i = 0; i < len; i++){
    if(arr[i] == target){
        console.log(`Found ${target} at ${i}`)
        break
    }
}