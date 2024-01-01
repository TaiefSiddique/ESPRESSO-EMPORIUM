import PropTypes from 'prop-types';
import { AiFillEye } from 'react-icons/ai';
import { BsFillPencilFill } from 'react-icons/bs';
import { MdDelete } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';


const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
    const { _id, name, supplier, category, taste, quantity, photo } = coffee;


    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        })

            .then((result) => {
                if (result.isConfirmed) {
                    fetch(`http://localhost:5002/coffee/${_id}`, {
                        method: 'DELETE',
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            if (data.deletedCount > 0) {
                                Swal.fire(
                                    'Deleted!',
                                    'Your Coffee has been deleted.',
                                    'success'
                                )
                                const remaining = coffees.filter(cof => cof._id !== _id)
                                setCoffees(remaining);
                            }
                        })
                }
            })
    }


    return (
        <div>
            <div className='bg-gray-50 grid grid-cols-6 justify-between p-5 rounded-xl gap-14 h-full'>
                <div className='col-span-2'>
                    <img className='h-full' src={photo} alt="" />
                </div>
                <div className='flex items-center col-span-3'>
                    <div>
                        <h2 className='text-2xl font-bold mb-3'>{name}</h2>
                        <p className='text-lg'>{supplier}</p>
                        <p className='text-lg'>{category}</p>
                        <p className='text-lg'>{taste}</p>
                        <p className='text-lg'>{quantity}</p>
                    </div>
                </div>

                <div className='flex items-center col-span-1'>
                    <div className="btn-group btn-group-vertical space-y-4">
                        <button className="btn text-2xl bg-yellow-600 text-white">
                            <AiFillEye></AiFillEye>
                        </button>
                        <Link to={`/updateCoffee/${_id}`}>
                            <button className="btn text-2xl bg-black text-white">
                                <BsFillPencilFill></BsFillPencilFill>
                            </button>
                        </Link>
                        <button onClick={() => handleDelete(_id)} className="btn text-2xl bg-red-500 text-white">
                            <MdDelete></MdDelete>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

CoffeeCard.propTypes = {
    coffee: PropTypes.object,
    coffees: PropTypes.array,
    setCoffees: PropTypes.func,
};

export default CoffeeCard;