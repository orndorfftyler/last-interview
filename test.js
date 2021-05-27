function _Node(value, next) {
    constructor() {
        this.value = value;
        this.next = next;
    }
}

insert(node) {
    if (!this.head) {
        this.head = node
    } else {
        let tempNode = this.head
        while (tempNode.next !== node) {
            tempNode = tempNode.next
        }
        tempNode.next = node
    }

}

function middle(list) {
    if (!this.head) {
        return
    }
    let tempNode = this.head
    let count = 0;
    while (tempNode !== null) {
        count++
        tempNode = tempNode.next

    }

    if (count % 2 == 0) {
        count = count/2
    } else {
        count = count/2
        count+=.5
    }
    tempNode = this.head
    for (let i = 0; i < count; i++) {
        tempNode = tempNode.next
    }

    return tempNode

}
