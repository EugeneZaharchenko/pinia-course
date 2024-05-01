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
        grouped: state => groupBy(state.items, (item) => item.name)
    },

    actions: {
        addItems(count, item) {
            count = parseInt(count)
            for (let index = 0; index < count; index++) {
                this.items.push({...item})
            }
        }
    }
})