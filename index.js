function MaClass(param){

    const _foo = () => {
        console.log('foo');
    }

    const foo = Object.bind(this, _foo)
    return this;
}

let a = MaClass();
a.foo(); // foo