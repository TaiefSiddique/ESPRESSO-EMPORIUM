import PropTypes from 'prop-types';



const CoffeeCardSingle = ({ coffee, }) => {
    const { name, supplier, category, taste, quantity, photo } = coffee;



    return (
        <div>
            <div className='bg-gray-50 grid grid-cols-2  rounded-xl gap-14 h-full hero container mx-auto mb-10 mt-10'>
                <div className='col-span-2'>
                    <img className='h-full' src={photo} alt="" />
                </div>
                <div className=''>
                    <div>
                        <h2 className=' text-6xl font-bold mb-3'>{name}</h2>
                        <p className='text-4xl'>Supplier: {supplier}</p>
                        <p className='text-4xl'>Catagoru: {category}</p>
                        <p className='text-4xl'>Taste: {taste}</p>
                        <p className='text-4xl'>Quantity: {quantity}</p>
                    </div>
                </div>

                <div className='flex items-center col-span-1'>
                    <div className="btn-group btn-group-vertical space-y-4">


                    </div>
                </div>
            </div>
        </div>
    );
};

CoffeeCardSingle.propTypes = {
    coffee: PropTypes.object,
    coffees: PropTypes.array,
    setCoffees: PropTypes.func,
};

export default CoffeeCardSingle;