import React, { Component } from "react";
import { ButtonContainer } from "./Button";
import HouseModal from "./HouseModal";
import gryfindor from "../img/gryfindor.gif";
import slytherin from "../img/slytherin.gif";
import huffflepuff from "../img/huffflepuff.gif";
import ravenclaw from "../img/ravenclaw.gif";

var backgroundImage = {
    width: "100%",
    height: "800px",
    backgroundImage: "url('img/User.gif')",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
};

class GamePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            selectedHouse: "",
            showHouseModal: false,
            selectedImage: "",
            showLoader: false
        };
    }
    handleName = event => {
        const target = event.target.value;
        this.setState({ name: target });
    };

    closeHouseModal = () => {
        this.setState({ showHouseModal: false, selectedHouse: "" });
    };

    submitForm = () => {
        this.setState({ showLoader: true });
        setTimeout(() => {
            const { name = "" } = this.state;
            if (name && name.length > 0) {
                const data = [
                    {
                        name: "Ankur",
                        house: "Gryffindor",
                        img: gryfindor
                    },
                    {
                        name: "Lokesh D",
                        house: "Slytherin",
                        img: slytherin
                    },
                    {
                        name: "Abhishek L",
                        house: "Gryffindor",
                        img: gryfindor
                    },
                    {
                        name: "Aadi B",
                        house: "Gryffindor",
                        img: gryfindor
                    },
                    {
                        name: "Darshan P",
                        house: "Gryffindor",
                        img: gryfindor
                    },
                    {
                        name: "Foram S",
                        house: "Gryffindor",
                        img: gryfindor
                    },
                    {
                        name: "Laksh D",
                        house: "Gryffindor",
                        img: gryfindor
                    },
                    {
                        name: "Shaan P",
                        house: "Gryffindor",
                        img: gryfindor
                    },
                    {
                        name: "Ved R",
                        house: "Gryffindor",
                        img: gryfindor
                    },
                    {
                        name: "Heer D",
                        house: "Gryffindor",
                        img: gryfindor
                    },
                    {
                        name: "Dhwani S",
                        house: "Gryffindor",
                        img: gryfindor
                    },
                    {
                        name: "Milonee J",
                        house: "Gryffindor",
                        img: gryfindor
                    },
                    {
                        name: "Sneha D",
                        house: "Gryffindor",
                        img: gryfindor
                    },
                    {
                        name: "Yashvi J",
                        house: "Gryffindor",
                        img: gryfindor
                    },
                    {
                        name: "Pal C",
                        house: "Gryffindor",
                        img: gryfindor
                    },
                    {
                        name: "Dyash K",
                        house: "Slytherin",
                        img: slytherin
                    },
                    {
                        name: "Harshil M",
                        house: "Slytherin",
                        img: slytherin
                    },
                    {
                        name: "Nandan C",
                        house: "Slytherin",
                        img: slytherin
                    },
                    {
                        name: "Tanmay P",
                        house: "Slytherin",
                        img: slytherin
                    },
                    {
                        name: "Rudraksh P",
                        house: "Slytherin",
                        img: slytherin
                    },
                    {
                        name: "Tathagat O",
                        house: "Slytherin",
                        img: slytherin
                    },
                    {
                        name: "Diwa R",
                        house: "Slytherin",
                        img: slytherin
                    },
                    {
                        name: "Ipsita P",
                        house: "Slytherin",
                        img: slytherin
                    },
                    {
                        name: "Nandni M",
                        house: "Slytherin",
                        img: slytherin
                    },
                    {
                        name: "Shrinali S",
                        house: "Slytherin",
                        img: slytherin
                    },
                    {
                        name: "Stuti M",
                        house: "Slytherin",
                        img: slytherin
                    },
                    {
                        name: "Nirva",
                        house: "Slytherin",
                        img: slytherin
                    },
                    {
                        name: "Rutvi P",
                        house: "Slytherin",
                        img: slytherin
                    },
                    {
                        name: "Pearl J",
                        house: "Slytherin",
                        img: slytherin
                    },
                    {
                        name: "Aditya K",
                        house: "Hufflepuff",
                        img: huffflepuff
                    },
                    {
                        name: "Bhavishya R",
                        house: "Hufflepuff",
                        img: huffflepuff
                    },
                    {
                        name: "Hutarth N",
                        house: "Hufflepuff",
                        img: huffflepuff
                    },
                    {
                        name: "Jash A",
                        house: "Hufflepuff",
                        img: huffflepuff
                    },
                    {
                        name: "Manas J",
                        house: "Hufflepuff",
                        img: huffflepuff
                    },
                    {
                        name: "Tanmay S",
                        house: "Hufflepuff",
                        img: huffflepuff
                    },
                    {
                        name: "Vishad J",
                        house: "Hufflepuff",
                        img: huffflepuff
                    },
                    {
                        name: "Khushboo M",
                        house: "Hufflepuff",
                        img: huffflepuff
                    },
                    {
                        name: "Jahaan J",
                        house: "Hufflepuff",
                        img: huffflepuff
                    },
                    {
                        name: "Paree S",
                        house: "Hufflepuff",
                        img: huffflepuff
                    },
                    {
                        name: "Preeti",
                        house: "Hufflepuff",
                        img: huffflepuff
                    },
                    {
                        name: "Viva K",
                        house: "Hufflepuff",
                        img: huffflepuff
                    },
                    {
                        name: "Prapti M",
                        house: "Hufflepuff",
                        img: huffflepuff
                    },
                    {
                        name: "Dhruvil A",
                        house: "Ravenclaw",
                        img: ravenclaw
                    },
                    {
                        name: "Dhyanam V",
                        house: "Ravenclaw",
                        img: ravenclaw
                    },
                    {
                        name: "Kush A",
                        house: "Ravenclaw",
                        img: ravenclaw
                    },
                    {
                        name: "Minesh P",
                        house: "Ravenclaw",
                        img: ravenclaw
                    },
                    {
                        name: "Prem H",
                        house: "Ravenclaw",
                        img: ravenclaw
                    },
                    {
                        name: "Shanay P",
                        house: "Ravenclaw",
                        img: ravenclaw
                    },
                    {
                        name: "Dhwani J",
                        house: "Ravenclaw",
                        img: ravenclaw
                    },
                    {
                        name: "Jiya V",
                        house: "Ravenclaw",
                        img: ravenclaw
                    },
                    {
                        name: "Vrinda D",
                        house: "Ravenclaw",
                        img: ravenclaw
                    },
                    {
                        name: "Khushi R",
                        house: "Ravenclaw",
                        img: ravenclaw
                    },
                    {
                        name: "Krisha F",
                        house: "Ravenclaw",
                        img: ravenclaw
                    }
                    {
                        name: "Ananya G",
                        house: "Ravenclaw",
                        img: ravenclaw
                    }
                    
                ];
                const filterArray = data.filter(
                    singleData =>
                        name.toUpperCase() === singleData.name.toUpperCase()
                );
                if (filterArray.length > 0) {
                    const selectedHouse = filterArray[0].house;
                    const selectedImage = filterArray[0].img;
                    this.setState({
                        selectedHouse,
                        name: "",
                        showHouseModal: true,
                        selectedImage,
                        showLoader: false
                    });
                } else {
                    const houses = [
                        {
                            house: "Gryffindor",
                            img: gryfindor
                        },
                        {
                            house: "Slytherin",
                            img: slytherin
                        },
                        {
                            house: "Hufflepuff",
                            img: huffflepuff
                        },
                        {
                            house: "Ravenclaw",
                            img: ravenclaw
                        }
                    ];
                    const max = 3;
                    const min = 0;
                    const randomNumber =
                        Math.floor(Math.random() * (max - min + 1)) + min;
                    const selectedHouse = houses[randomNumber];
                    if (selectedHouse && selectedHouse.house) {
                        const selectedHouse = houses[randomNumber].house;
                        const selectedImage = houses[randomNumber].img;
                        this.setState({
                            showLoader: false,
                            selectedHouse,
                            selectedImage,
                            showHouseModal: true
                        });
                    } else {
                        this.setState({ showLoader: false });
                        alert("Something went wrong. Please retry.");
                    }
                }
            }
        }, 3000);
    };
    render() {
        return (
            <div className="App-header">
                <img
                    src={gryfindor}
                    style={{
                        height: "50%",
                        width: "400px",
                        position: "absolute",
                        top: 0,
                        right: 0
                    }}
                    alt="image"
                />
                <img
                    src={slytherin}
                    style={{
                        height: "50%",
                        width: "400px",
                        position: "absolute",
                        top: 0,
                        left: 0
                    }}
                    alt="image"
                />
                <img
                    src={huffflepuff}
                    style={{
                        height: "50%",
                        width: "400px",
                        position: "absolute",
                        bottom: 0,
                        right: 0
                    }}
                    alt="image"
                />
                <img
                    src={ravenclaw}
                    style={{
                        height: "50%",
                        width: "400px",
                        position: "absolute",
                        bottom: 0,
                        left: 0
                    }}
                    alt="image"
                />
                <div style={backgroundImage}>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            flexDirection: "column",
                            position: "absolute"
                        }}
                    >
                        {!this.state.showLoader ? (
                            <div>
                                <div style={{ marginTop: 16 }}>
                                    Enter your name
                                </div>
                                <input
                                    onChange={this.handleName}
                                    type="text"
                                    className="form-control mb-2 mr-sm-2 mb-sm-0 mt-2"
                                    placeholder="Name"
                                    name="name"
                                    value={this.state.name}
                                />
                                <ButtonContainer
                                    onClick={() => this.submitForm()}
                                    style={{ marginTop: 24, width: 200 }}
                                >
                                    Submit
                                </ButtonContainer>
                            </div>
                        ) : (
                            undefined
                        )}
                        {this.state.showHouseModal ? (
                            <div
                                style={{
                                    position: "absolute",
                                    width: "500px",
                                    top: 0,
                                    bottom: 0
                                }}
                            >
                                <HouseModal
                                    selectedHouse={this.state.selectedHouse}
                                    closeHouseModal={this.closeHouseModal}
                                    selectedImage={this.state.selectedImage}
                                />
                            </div>
                        ) : (
                            undefined
                        )}
                    </div>
                </div>
            </div>
        );
    }
}
export default GamePage;
