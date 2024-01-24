const RecNine = () => {
    function bubbleSort(arr: number[]): number[] {
        const n = arr.length;
    
        for (let i = 0; i < n - 1; i++) {
            for (let j = 0; j < n - 1 - i; j++) {
                if (arr[j] > arr[j + 1]) {
                    const temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
    
        return arr;
    }
    
    const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
    const sortedArray = bubbleSort([...unsortedArray]);
    
  return <div>{`before sorting ${unsortedArray} after sorting ${sortedArray} using bubble sort`}</div>;
};

export default RecNine;
