//Radix Sort - Pruebas
var extractDigit = function( a, bitMask, shiftRightAmount ) {
    var digit = (a & bitMask) >>> shiftRightAmount; 
    return digit;
}
function radixSortLSD(_input_array) {
    var numberOfBins = 256;
    var Log2ofPowerOfTwoRadix = 8;
    var _output_array = new Array(_input_array.length);
    var count = new Array(numberOfBins);
    var _output_array_has_result = false;

    var bitMask = 255;
    var shiftRightAmount = 0;

    var startOfBin = new Array( numberOfBins );
    var endOfBin   = new Array( numberOfBins );

    while( bitMask != 0 )   
    {
        for (var i = 0; i < numberOfBins; i++ )
            count[ i ] = 0;
        for (var _current = 0; _current < _input_array.length; _current++ )   
            count[ extractDigit( _input_array[ _current ], bitMask, shiftRightAmount ) ]++;

        startOfBin[ 0 ] = endOfBin[ 0 ] = 0;
        for( var i = 1; i < numberOfBins; i++ )
            startOfBin[ i ] = endOfBin[ i ] = startOfBin[ i - 1 ] + count[ i - 1 ];
        for ( var _current = 0; _current < _input_array.length; _current++ )
            _output_array[ endOfBin[ extractDigit( _input_array[ _current ], bitMask, shiftRightAmount ) ]++ ] = _input_array[ _current ];

        bitMask <<= Log2ofPowerOfTwoRadix;
        shiftRightAmount += Log2ofPowerOfTwoRadix;
        _output_array_has_result = !_output_array_has_result;

        var tmp = _input_array, _input_array = _output_array, _output_array = tmp; 
    }
    if ( _output_array_has_result )
        for ( var _current = 0; _current < _input_array.length; _current++ )    
            _input_array[ _current ] = _output_array[ _current ];

    return _input_array;
}

function simpleUsageExampleOfRadixSortLSD() {
    var arrayToBeSorted = [67,17,36,100,22,21,21,3,90,2,26,38,96,95,19,66,63,53,85,13,41,77,73,90,95,81,54,56,54,28,15,85,28,20,96,80,91,23,55,98,8,53,82,41,85,41,7,87,58,38,60,74,86,81,23,93,100,86,77,90,62,49,26,59,93,12,2,28,53,76,85,93,23,72,48,37,99,68,50,83,79,70,50,12,4,64,79,39,76,81,89,37,74,1,22,6,15,54,95,61,51,78,38,27,7,34,86,45,86,45,51,76,70,33,95,69,59,3,81,71,25,97,80,22,75,74,89,10,100,70,10,96,11,53,75,91,42,60,20,93,5,25,21,40,50,22,23,26,30,27,34,63,8,30,82,10,54,30,73,32,27,69,26,89,27,9,19,82,45,24,32,21,31,72,94,82,37,68,35,76,41,67,18,13,2,19,86,56,15,73,4,14,83,73,71,10,89,11,23,87,87,18,77,32,31,27,2,21,15,65,89,50,44,82,20,88,30,80,41,40,79,29,84,79,22,64,17,76,51,99,62,25,55,80,89,27,12,75,76,87,26,22,95,38,57,11,63,49,11,3,13,23,10,8,45,49,17,62,66,5,64,43,18,69,59,61,89,49,19,32,84,3,52,47,83,49,93,20,27,61,66,68,54,36,85,56,41,58,14,25,96,41,84,6,28,33,97,35,81,55,57,42,39,85,61,35,56,52,49,95,61,98,69,94,52,57,44,50,37,90,13,24,36,53,49,81,7,20,11,77,44,80,52,27,40,68,23,13,83,81,51,64,8,79,89,83,69,46,15,28,89,80,13,4,29,80,71,37,61,52,58,5,55,7,54,54,25,30,8,76,100,70,43,96,51,32,68,36,52,38,73,67,75,72,35,31,19,62,5,26,20,19,68,87,6,84,45,40,7,46,64,41,36,97,32,85,31,47,100,64,38,2,59,39,21,15,57,27,87,15,45,65,43,59,4,49,93,76,67,87,88,12,98,56,35,4,7,46,85,75,38,42,4,50,50,27,32,85,88,51,8,100,30,48,35,27,87,70,44,47,30,95,69,66,33,79,40,11,19,57,46,59,71,67,80,94,61,20,12,46,7,75,35,24,74,87,81,37,33,2,60,6,38,46,52,38,97,71,71,47];
    var sortedArray = radixSortLSD(arrayToBeSorted);
    for ( var _current = 0; _current < sortedArray.length; _current++ ) {
        console.log(sortedArray[_current]);
    }

}
simpleUsageExampleOfRadixSortLSD();