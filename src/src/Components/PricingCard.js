import React from 'react';

const PricingCode = (props) => {
    const { title, price, duration, users, storage, features } = props;
    // console.log(features);
    
    return (
        <React.Fragment>
            <div className="col-lg-4 col-md-4 col-sm-12">
                <div className="card text-center mb-3">
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
                            <p className={feature.unlimited_public_projects ? '' : 'text-muted'}>{feature.unlimited_public_projects ? '✅' : '❌'} Unlimited Public Projects</p>
                            <p className={feature.community_access ? '' : 'text-muted'}>{feature.community_access ? '✅' : '❌'} Community Access: </p>
                            <p className={feature.unlimited_private_projects ? '' : 'text-muted'}>{feature.unlimited_private_projects ? '✅' : '❌'} Unlimited Private Projects: </p>
                            <p className={feature.dedicated_phone_support ? '' : 'text-muted'}>{feature.dedicated_phone_support ? '✅' : '❌'} Dedicated Phone Support</p>
                            <p className={feature.free_domain ? '' : 'text-muted'}>{feature.free_domain ? '✅' : '❌'} Free Domain</p>
                            <p className={feature.monthly_status_report ? '' : 'text-muted'}>{feature.monthly_status_report ? '✅' : '❌'} Monthly Status Report</p>
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