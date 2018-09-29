module.exports = function check(str, bracketsConfig) {
    var closedCorresp = {};
    var similar = {} 
    for (var i=0;i<bracketsConfig.length;i++) {
        var openBracket = bracketsConfig[i][0];
        var closedBracket = bracketsConfig[i][1];
        if (openBracket == closedBracket) {
            similar[openBracket] = true;
        } else {
            closedCorresp[closedBracket] = openBracket;
        }
    }
    var st = [];
    for (var i=0; i<str.length;i++) {
        var symbol = str[i];
        var stackHead = st[st.length-1];
 
        if (similar[symbol]) {
            if (stackHead == symbol) {
                st.pop();
            } else {
                st.push(symbol);
            }
        } else if (!closedCorresp[symbol]) {
            st.push(symbol);
        } else {
            if (st.pop() != closedCorresp[symbol]) {
                return false;
            }
        }
    }
    return (st.length == 0);
}
