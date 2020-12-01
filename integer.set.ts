class IntegerSet {
    private set: Array<number> = [];

    add(item: number)
    {
        if(!this.is_exist(item))
        {
            this.set.push(item);
        }
        return this;
    }

    remove(item: number)
    {
        if(this.is_exist(item))
        {
            const index = this.set.indexOf(item)
            this.set.splice(index, 1);
        }
        return this;
    }

    is_exist(item: number)
    {
        return this.set.includes(item)
    }

    get()
    {
        return this.set;
    }
}

export default IntegerSet;
