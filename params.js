module.export = class params{
    set name (name){
        this._name = name;
    }
    get name() {
        return this._name
    }
    set required(req){
        this._req = (req !== undefined)?req : false
    }
}