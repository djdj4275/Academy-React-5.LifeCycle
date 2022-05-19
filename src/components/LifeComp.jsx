import { Component } from 'react';

class ListComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            students : [
                {id : 1, name : '홍길동'}
            ],
            date : new Date()
        }
    }

    // 함수를 부를때 마다 다시 값을 호출
    tick = () => {
        this.setState({date : new Date()})
    }

    componentDidMount() {
        console.log('마운트가 되었습니다');
        this.timerId = setInterval( () => this.tick(), 1000 );
    }

    componentDidUpdate() {
        console.log('업데이트가 되었습니다');
        clearInterval(this.timerId);
    }

    componentWillUnmount() {
        console.log('언마운트 되었습니다');
    }

    render() {
        return (
            <div>
                <h1>라이플 사이클 확인</h1>
                <h2>{ this.state.date.toLocaleTimeString() }</h2>
                <button onClick={()=>{
                    const nextStudent = this.state.students.concat({
                        id : 2,
                        name : "익명"
                    })
                    this.setState({students : nextStudent})
            }}>값 추가</button>
                <ul>
                    {
                        this.state.students.map((student) =>(
                            <li key={student.id}>{student.name}</li>
                        ))
                    }
                </ul>
            </div>
        );
    }
}

export default ListComp;