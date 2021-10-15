var app = new Vue({
    el: '#app',
    data: {
        title: '',
        goal: '',
        description: '',
        buyItems: [
        ],
        tempItem: {
            itemName: '',
            itemPrice: 0,
            itemAmount: 0,
            itemTotalCost: 0,
            itemNote: '',
        },
        buyMethod: '',
        totalCost: 0,
    },
    methods: {
        show: function() {
            console.log(this.title);
        },
        addItemToBuyList: function() {
            if (this.tempItem.itemName && this.tempItem.itemAmount) {
                const temp = {
                    itemName: this.tempItem.itemName,
                    itemAmount: this.tempItem.itemAmount,
                    itemPrice: this.tempItem.itemPrice,
                    itemTotalCost: this.tempItem.itemAmount * this.tempItem.itemPrice,
                    itemNote: this.tempItem.itemNote
                };
                this.buyItems.push(temp);
            } else {
                if (!this.tempItem.itemName) {
                    Swal.fire({
                        title: '物品名稱錯誤!!',
                        text: '請輸入物品名稱',
                        icon: 'error',
                        confirmButtonText: '返回'
                    })
                } else {
                    Swal.fire({
                        title: '物品數量輸入錯誤!!',
                        text: '0個就不要放進來啦',
                        icon: 'error',
                        confirmButtonText: '窩錯了'
                    })
                }
            }
        }
    },
    computed: {
        tempTotalCost: function() {
            return this.tempItem.itemPrice * this.tempItem.itemAmount;
        },
    }
});
