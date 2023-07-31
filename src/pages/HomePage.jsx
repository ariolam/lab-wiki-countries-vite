import axios from "axios";
import { useState, useEffect } from "react";

const apiURL = "https://ih-countries-api.herokuapp.com/countries";

function HomePage() {
    const [countries, setCountries] = useState([]);

    // useEffect - Initial render (Mounting)
    useEffect(() => {
        const getCountries = async () => {
            const response = await axios.get(apiURL);
            const data = response.data;
            console.log("data", data);
            setCountries(data);
        };
        getCountries();
    }, []);

    return (
        <div>
            <h1 style={{ fontSize: "24px" }}>
                WikiCountries: Your Guide to the World
            </h1>
            {countries.map((country) => {
                <div key={country._id}>
                    return
                    <h1>{country.name.common}</h1>
                </div>;
            })}
            {/* <div
                className="container"
                style={{ maxHeight: "90vh", overflow: "scroll" }}
            >
                <h1 style={{ fontSize: "24px" }}>
                    WikiCountries: Your Guide to the World
                </h1>

                <div className="list-group">
                    <a
                        className="list-group-item list-group-item-action"
                        href="/ABW"
                    >
                        🇦🇼 Aruba
                    </a>
                    <a
                        className="list-group-item list-group-item-action"
                        href="/AFG"
                    >
                        🇦🇫 Afghanistan
                    </a>
                    <a
                        className="list-group-item list-group-item-action"
                        href="/AGO"
                    >
                        🇦🇴 Angola
                    </a>
                    <a
                        className="list-group-item list-group-item-action"
                        href="/AIA"
                    >
                        🇦🇮 Anguilla
                    </a>
                    <a
                        className="list-group-item list-group-item-action"
                        href="/ALA"
                    >
                        🇦🇽 Åland Islands
                    </a>
                    <a
                        className="list-group-item list-group-item-action"
                        href="/ALB"
                    >
                        🇦🇱 Albania
                    </a>
                    <a
                        className="list-group-item list-group-item-action"
                        href="/AND"
                    >
                        🇦🇩 Andorra
                    </a>
                    <a
                        className="list-group-item list-group-item-action"
                        href="/ARE"
                    >
                        🇦🇪 United Arab Emirates
                    </a>
                    <a
                        className="list-group-item list-group-item-action"
                        href="/ARG"
                    >
                        🇦🇷 Argentina
                    </a>
                    <a
                        className="list-group-item list-group-item-action"
                        href="/ARM"
                    >
                        🇦🇲 Armenia
                    </a>
                    <a
                        className="list-group-item list-group-item-action"
                        href="/ASM"
                    >
                        🇦🇸 American Samoa
                    </a>
                    <a
                        className="list-group-item list-group-item-action"
                        href="/ATA"
                    >
                        🇦🇶 Antarctica
                    </a>
                    <a
                        className="list-group-item list-group-item-action"
                        href="/FLK"
                    >
                        🇫🇰 Falkland Islands
                    </a>
                    <a
                        className="list-group-item list-group-item-action active"
                        href="/FRA"
                    >
                        🇫🇷 France
                    </a>
                    <a
                        className="list-group-item list-group-item-action"
                        href="/ZWE"
                    >
                        🇿🇼 Zimbabwe
                    </a>
                </div>
            </div> */}
        </div>
    );
}

export default HomePage;
