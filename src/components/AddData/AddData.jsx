import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';

function AddData({ onSubmit }) {
    const [input, setInput] = useState({
        fname: '',
        lname: '',
        email: '',
        address: '',
        phone: ''

    });

    const [viewData, setViewData] = useState([])

    const handleInput = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setInput({ ...input, [name]: value });
    }

    const handleUpdate = (id) => {

        let record = viewData;
        let updatedRecord = record.filter((data) => {
            return (
                data.id === id
            )
        })

        setInput(updatedRecord[0]);
    }

    // Delete Handle
    const handleDelete = (id) => {

        let record = viewData;
        let deletedRecord = record.filter((data) => data.id != id);

        setTableData(deletedRecord);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if (input.id) {
            setViewData(viewData.map((record) => {

                if (record.id === input.id) {
                    return { ...record, ...input }
                }
                else {
                    return record
                }
            }))
        } else {
            const idGen = {
                ...input,
                id: generateUniqueId({
                    length: 4,
                    useLetters: false,
                }),
            }

            setViewData([...viewData, idGen])

        }

        setInput({
            fname: '',
            lname: '',
            email: '',
            address: '',
            phone: ''
        });
    };



    return (
        <>
            <div className="container">
                <h1 className="text-center">Employee Management CRUD</h1>
                <div className="row d-flex justify-content-center mt-5">
                    <div className="col-5">
                        <div className="heading d-flex justify-content-between align-item-center p-3">
                            <div className="fs-3">
                                <FontAwesomeIcon icon={faHouse} style={{ color: "#ffffff", }} />
                            </div>
                            <div className="text-white fs-3">
                                <FontAwesomeIcon icon={faUser} style={{ color: "#ffffff", }} />
                                <span> New Employee</span> </div>
                        </div>
                        <form >
                            <div className="form-group">
                                <label>First Name:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="fname"
                                    value={input.fname}
                                    onChange={handleInput}
                                />
                            </div>
                            <div className="form-group">
                                <label>Last Name:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="lname"
                                    value={input.lname}
                                    onChange={handleInput}


                                />
                            </div>
                            <div className="form-group">
                                <label>Email:</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    value={input.email}
                                    onChange={handleInput}

                                />
                            </div>
                            <div className="form-group">
                                <label >Address:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="address"
                                    value={input.address}
                                    onChange={handleInput}

                                />
                            </div>
                            <div className="form-group">
                                <label >Phone:</label>
                                <input
                                    type="tel"
                                    className="form-control"
                                    name="phone"
                                    value={input.phone}
                                    onChange={handleInput}

                                />
                            </div>
                            <button type="submit" className="btn btn-success mt-3">
                                SUBMIT
                            </button>
                        </form>
                    </div>
                </div>


            </div>


        </>
    )
}

export default AddData;



