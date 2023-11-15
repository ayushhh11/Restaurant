import React from "react";
class UserClass extends React.Component {
    
    constructor(props){
        super(props);
        this.state  = {
            count1: 22,
            count2: 11,
        }
        //NEVER DIRECTLY UPDATE STATE VARIABLE
        
    }
    componentDidMount(){
        console.log('Child did mount');
    }
    render() {
        const { name } = this.props;
        const { count1, count2 } = this.state;
        return(<>
            
            <div className='user-card'>
                <h5>Name{name}</h5><br/>
                <h5>count1: {count1}</h5><br/>
                <button onClick={()=>{
                  this.setState({
                    count1: this.state.count1 + 1
                  })  
                }}>Increase Count</button>
            <h3> Ayush Tomar</h3>
            <h3>Mob: 9617241111</h3>

        </div>
        </>
        );
    }
}
export default UserClass;