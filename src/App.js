import { MissionUtils } from "@woowacourse/mission-utils";
class App {
  async play() {
    do {
      const cars = await this.getCars();
      const rounds = await this.getRounds();
    } while (rounds > 0);
  }
  async getCars() {
    const carsInput = await MissionUtils.Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );
    this.carsCheck(carsInput);
    return carsInput;
  }
  carsCheck(carsInput) {
    const cars = carsInput.split(",").map((car) => {
      if (car.length > 5) throw Error("[ERROR] 숫자가 잘못된 형식입니다.");
      return { name: car, score: 0 };
    });
    console.log(cars);
  }
  async getRounds() {
    const roundsInput = await MissionUtils.Console.readLineAsync(
      "시도할 횟수는 몇 회인가요?"
    );
    return roundsInput;
  }
}

export default App;
