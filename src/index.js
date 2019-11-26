import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

class Seat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rent: 0,
            power: 0,
            admin: 0,
            internet: 0,
            pantry: 0,
            costOfCapital1: 0,
            interior: 0,
            costOfCapital2: 0,
            deposit: 0,
            costOfCapital3: 0,
            area: 0,
            employees: 0,
            lease: 0,
            monthExp: 0,
            costPerSeat: 0,
            yearExp: 0
        }
    };

    myChangeHandler = event => {
        let nam = event.target.name;
        let val = parseInt(event.target.value);
        this.setState({ [nam]: val });
    }

    solve = event => {
        event.preventDefault();
        this.setState({ monthExp: this.state.rent + this.state.rent + this.state.admin + this.state.internet + this.state.pantry }, () => {
            this.setState({ costPerSeat: this.state.monthExp / this.state.employees });
            this.setState({ yearExp: this.state.monthExp * 12 });
        });
    }
    
    render() {
        return (
            <div>
                <div class="main-header"><h1>Seat Calculator</h1></div>
                <div class="form-style-3 grid-container" onSubmit={this.solve}>
                    <div class="grid-item">
                        <form>
                            <fieldset><legend>Monthly Expenses</legend>
                                <label for="field1"><span>Rent, Parking, Maintenance</span><input type="number" step="100" class="input-field" name="rent" onChange={this.myChangeHandler} /></label>
                                <label for="field2"><span>Electricity, Power Backup </span><input type="number" step="100" class="input-field" name="power" onChange={this.myChangeHandler} /></label>
                                <label for="field3"><span>Admin and HK Staff </span><input type="number" step="100" class="input-field" name="admin" onChange={this.myChangeHandler} /></label>
                                <label for="field4"><span>Internet, Repairs and Printers </span><input type="number" step="100" class="input-field" name="internet" onChange={this.myChangeHandler} /></label>
                                <label for="field5"><span>Pantry, Water, House Keeping </span><input type="number" step="100" class="input-field" name="pantry" onChange={this.myChangeHandler} /></label>
                            </fieldset>
                        </form>
                    </div>
                    <div class="grid-item">
                        <form>
                            <fieldset><legend>One-Time Expenses</legend>
                                <label for="field6"><span>Cost Of Capital (% p.a.)</span><input type="number" step="1" class="input-field" name="costOfCapital1" onChange={this.myChangeHandler} /></label>
                                <label for="field7"><span>Overall Interior Expense </span><input type="number" step="1000" class="input-field" name="interior" onChange={this.myChangeHandler} /></label>
                                <label for="field8"><span>Cost Of Capital (p.a.) </span><input type="number" step="1000" class="input-field" name="costOfCapital2" onChange={this.myChangeHandler} value={this.state.interior * 0.12} readOnly/></label>
                                <label for="field9"><span>Security Deposit </span><input type="number" step="1000" class="input-field" name="deposit" onChange={this.myChangeHandler} /></label>
                                <label for="field10"><span>Cost Of Capital (p.a.) </span><input type="number" step="1" class="input-field" name="costOfCapital3" onChange={this.myChangeHandler} value={this.state.deposit * 0.12} readOnly /></label>
                            </fieldset>
                        </form>
                    </div>
                    <div class="grid-item">
                        <form>
                            <fieldset><legend>Other Details</legend>
                                <label for="field11"><span>Office Area (in sqft.)</span><input type="number" step="100" class="input-field" name="area" onChange={this.myChangeHandler} /></label>
                                <label for="field12"><span>Number of Employees </span><input type="number" step="1" class="input-field" name="employees" onChange={this.myChangeHandler} /></label>
                                <label for="field13"><span>Lease Tenure (in months) </span><input type="number" step="1" class="input-field" name="lease" onChange={this.myChangeHandler} /></label>
                                <input type="submit" class="button" value="Calculate" />
                            </fieldset>
                        </form>
                    </div>
                    <div class="grid-item">
                        <h3>Monthly Expense: ₹{this.state.monthExp}</h3>
                    </div>
                    <div class="grid-item">
                        <h3>Cost Per Seat: ₹{this.state.costPerSeat}</h3>
                    </div>
                    <div class="grid-item">
                        <h3>Yearly Expense: ₹{this.state.yearExp}</h3>
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<Seat />, document.getElementById('root'));