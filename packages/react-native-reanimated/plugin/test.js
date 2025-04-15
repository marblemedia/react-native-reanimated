function TestWorklet() {
	"worklet";

	class Base {
		value = 2;

		constructor() {
			this.value = 1;
		}



		testing() {

		}

		get testing2() {
			return this.value;
		}
	}

	class Test extends Base {
		constructor() {
			super();
			this.value = 3;
		}
	}
}