import React from 'react';

const PricingCode = (props) => {
    const { title, price, duration, users, storage, features } = props;
    // console.log(features);
    
    return (
        <React.Fragment>
            <div className="col-lg-4 col-md-4 col-sm-12">
                <div className="card text-center">
                    <div className='card-body'>
                    <h2 className='plan_title'>{title}</h2>
                    <h3 className='plan_price'> ${price}/{duration}</h3>
                    <hr />
                    <div className='list text-start'>
                        <p><b>Users:</b> {users}</p>
                        <p><b>Storage:</b> {storage}</p>
                    {
                        features.map((feature, index) => (
                        <div key={index}>
                            <p>{feature.unlimited_public_projects ? '✅' : '❌'} Unlimited Public Projects</p>
                            <p>{feature.community_access ? '✅' : '❌'} Community Access: </p>
                            <p>{feature.unlimited_private_projects ? '✅' : '❌'} Unlimited Private Projects: </p>
                            <p>{feature.dedicated_phone_support ? '✅' : '❌'} Dedicated Phone Support</p>
                            <p>{feature.free_domain ? '✅' : '❌'} Free Domain</p>
                            <p>{feature.monthly_status_report ? '✅' : '❌'} Monthly Status Report</p>
                        </div>
                        ))
                    }
                    </div>
                    <button className='btn btn-primary w-50 mb-3'>Button</button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default PricingCode;