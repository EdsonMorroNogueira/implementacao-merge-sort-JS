// function merge(left: any, right: any): any {
//     let result: string[] = [];
//     let leftIndex = 0;
//     let rightIndex = 0;
  
//     while (leftIndex < left.length && rightIndex < right.length) {
//       if (new Date(left[leftIndex]).getTime() < new Date(right[rightIndex]).getTime()) {
//         result.push(left[leftIndex]);
//         leftIndex++;
//       } else {
//         result.push(right[rightIndex]);
//         rightIndex++;
//       }
//     }

//     return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
//   }


  function mergeDates(left: any, right: any): any {
    let result: any = [];
    let leftIndex = 0;
    let rightIndex = 0;
  
    while (leftIndex < left.length && rightIndex < right.length) {
      if (new Date(left[leftIndex].createdAt).getTime() > new Date(right[rightIndex].createdAt).getTime()) {
        result.push(left[leftIndex]);
        leftIndex++;
      } else {
        result.push(right[rightIndex]);
        rightIndex++;
      }
    }

    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
  }

  export function mergeSort(arr: any): any {
    if (arr.length <= 1) {
      return arr;
    }
  
    const mid = Math.floor(arr.length / 2); 
    const left = mergeSort(arr.slice(0, mid)); 
    const right = mergeSort(arr.slice(mid)); 
  
    return mergeDates(left, right);
  }