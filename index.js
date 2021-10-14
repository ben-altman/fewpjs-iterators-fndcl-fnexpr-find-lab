
const superbowlWin = (record) => {
    const win = record.find(function(r) {return r.result === "W"})
    if (win) {
        return win.year
    } else {
        return undefined
    }
}

// record.find(function(r) {return r.result === "W"});
