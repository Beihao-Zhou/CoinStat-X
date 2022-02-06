import React from 'react'
import millify from 'millify'
import { Typography, Row, Col, Statistic } from 'antd'
import { Link } from 'react-router-dom'

import { useGetCryptosQuery } from '../services/cryptoApi'
import { Cryptocurrencies, News, Loader } from '../components'

const { Title } = Typography;

const Homepage = () => {
    
    const { data, isFetching } = useGetCryptosQuery(10);
    const globalStats = data?.data?.stats;

    console.log(data)

    if (isFetching) return <Loader />

    return (
        <div>
            <Title level={2} className='heading'>Global Statistics</Title>
            <Row>
                <Col lg={8} sm={12}><Statistic title="Total Exchanges" value={millify(globalStats.totalExchanges)}/></Col>
                <Col lg={8} sm={12}><Statistic title="Total Market Cap" value={millify(globalStats.totalMarketCap)}/></Col>
                <Col lg={8} sm={12}><Statistic title="Total 24h Volume" value={millify(globalStats.total24hVolume)}/></Col>
                <Col lg={8} sm={12}><Statistic title="Total Markets" value={millify(globalStats.totalMarkets)}/></Col>
            </Row>
            <div className='home-heading-container'>
                <Title level={2} className='home-title'>Top 10 Cryptocurrencies in the globe</Title>
                <Title level={5} className='show-more'><Link to="/cryptocurrencies">Show more</Link></Title>
            </div>
            <Cryptocurrencies simplified/>
            <div className='home-heading-container'>
                <Title level={2} className='home-title'>Latest Crypto News</Title>
                <Title level={5} className='show-more'><Link to="/news">Show more</Link></Title>
            </div>
            <News simplified/>
        </div>
    )
}

export default Homepage
