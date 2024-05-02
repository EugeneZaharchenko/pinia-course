import { defineStore } from "pinia";
import { groupBy } from "lodash";

export const useCartStore = defineStore("CartStore", {
    state: () => {
        return {
            items: []
        };
    },
    getters: {
        count: (state) => state.items.length,
        isEmpty() {
            return this.count === 0
        },
        grouped: state => {
            const grouped = groupBy(state.items, (item) => item.name);
            const sorted = Object.keys(grouped).sort();
            let inOrder = {};
            sorted.forEach(key => (inOrder[key] = grouped[key]));
            return inOrder
        },
        groupCount: state => name => state.grouped[name].length,
        total: state => state.items.reduce((prev, curr) => prev + curr.price, 0)
    },

    actions: {
        addItems(count, item) {
            count = parseInt(count)
            for (let index = 0; index < count; index++) {
                this.items.push({...item})
            }
        },
        clearItem(itemName) {
            this.items = this.items.filter(item => item.name !== itemName)
        },
        setItemCount(item, count) {
            this.clearItem(item.name);
            this.addItems(count, item)
        }
    }
})