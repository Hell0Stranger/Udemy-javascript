//global scope
const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];


function getUserNumberInput() {
    // local or block scope
    // 블록 내에서는 어디든 사용가능하지만 외부에서는 사용할 수 없다.
    return parseInt(usrInput.value);
  }
  
/**
 * 연산자가 포함된 텍스트를 전달하고 출력할 함수
 * 연산자, 계산전 값, 계산 값
 */
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription);
  }

  /**
   * 
   */
function writeToLog(
    operationIdentifier, 
    prevResult, 
    operationNumer, 
    newResult
)  {
    const logEntry = {
        operation: operationIdentifier,
        prevResult: prevResult,
        number: operationNumer,
        result: newResult
    };
     // logEntries.push(enteredNumber);
     logEntries.push(logEntry);
     console.log(logEntries);
 
}

//내부 상수와 외부 전역 값을 섞어서 사용하지 않고 전역 값을 이용해서만 작동해
//이벤트 리스너로만 사용되는 함수의 경우에는 전역변수를 사용해도 ok
//함수가 일부 전역값을 manupulate하더라도 무언가를 반환해서는 안된다.
//function -> return은 함수가 신호를 보내는 것 
// console.log(result); // can't use this value!!

function add() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult = currentResult + enteredNumber;
    createAndWriteOutput('+', initialResult, enteredNumber);
    writeToLog('ADD', initialResult,enteredNumber, currentResult);

  }
  
  function subtract() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult = currentResult - enteredNumber;
    createAndWriteOutput('-', initialResult, enteredNumber);
    writeToLog('SUBTRACT', initialResult,enteredNumber, currentResult);
  }
  
  function multiply() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult = currentResult * enteredNumber;
    createAndWriteOutput('*', initialResult, enteredNumber);
    writeToLog('MULTIPLY', initialResult,enteredNumber, currentResult);
  }
  
  function divide() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult = currentResult / enteredNumber;
    createAndWriteOutput('/', initialResult, enteredNumber);
    writeToLog('DEVIDE', initialResult,enteredNumber, currentResult);
  }
  
  addBtn.addEventListener('click', add);
  subtractBtn.addEventListener('click', subtract);
  multiplyBtn.addEventListener('click', multiply);
  divideBtn.addEventListener('click', divide);


// ====💕 문자열 다루기 ===========
// let calculationDescription = `(${defaultResult} + 10 ) * 3 / 2 - 1 `;
let errorMessage = 'An error \n' +
                    'occured!';  //출력할때는 줄 바꿈이나 여백은 무시된다. \n =>개행문자
//template 은 묵시적으로 toString을 호출한다
//combine string + number
// => 숫자와 문자열을 결합하면 '문자열'로 바뀐다.

// ==== 💕문자열 숫자 변환 ====
// 자바스크립트 타입추론 x
 //parseFloat => 10.0 으로 변환 built-in javascript function
//parseInt 대신 + 로 사용가능


//==== 💕 string concatenation =========
// let calculationDescription = '(10) * 3 / 2 - 1';
//이 곳에 currentResult의 값을 사용하고 싶다면 String Concatenation 이 필요하다
// let calculationDescription = '(' + currentResult + ' + 10 ) * 3 / 2 - 1 ';
// let calculationDescription = `($defaultResult + 10 ) * 3 / 2 - 1 `;


//==== 💕 함수의 위치 =======
//함수정의 위치를 함수호출보다 다음라인에 넣어도 오류가 없는 이유
//스크립트를 로드할 때, 위에서 부터 아래로 읽기를 시작하고
//파일 내에서 함수를 찾게 되면 함수를 자동으로 맨 위로 끌고간다
//즉, 스크립트를 실행하기 전에 자동으로 모든 함수를 등록부터 한다 :)


