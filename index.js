getInfo () {
  return {
    // unique ID for your extension
    id: 'yourScratchExtension',

    // name displayed in the Scratch UI
    name: 'Demo',

    // colours to use for your extension blocks
    color1: '#000099',
    color2: '#660066',

    // your Scratch blocks
    blocks: [
      {
        // function where your code logic lives
        opcode: 'myFirstBlock',

        // type of block
        blockType: BlockType.REPORTER,

        // label to display on the block
        text: 'Title for ISBN book [BOOK_NUMBER]',

        // arguments used in the block
        arguments: {
          BOOK_NUMBER: {
            defaultValue: 1718500564,

            // type/shape of the parameter
            type: ArgumentType.NUMBER
          }
        }
      }
    ]
  };
}
