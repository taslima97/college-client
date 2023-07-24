


const Client = ({ client }) => {
    const { name, address, subject, email, photo } = client;
    return (
        <div>

            <div className="flex items-center justify-evenly space-x-4 shadow-lg my-5 ">
                <img style={{ borderRadius: '0 200px 200px 200px' }} className="w-[100px] h-[100px]" src={photo} alt="" />
                <div>
                    <h3 className="uppercase">{name}------</h3>
                    <p>{email}</p>
                </div>
                <div>
                    <p className="text-yellow-600">{subject}</p>
                    <p>{address}</p>
                </div>
            </div>
           
        </div>
    );
};

export default Client;