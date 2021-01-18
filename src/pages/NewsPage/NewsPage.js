import React, { useEffect } from 'react';
import { NewsCard } from '../../components/'
import axios from 'axios'
import './App.css';
import { CircleToBlockLoading } from 'react-loadingg';
import { useDispatch, useSelector } from 'react-redux';


const NewsPage = (props) => {

	const { news, isLoading, hasError, filter } = useSelector((state) => state.news)
	const dispatch = useDispatch();

	useEffect(() => {
		const getApi = async () => {
			try {
				const URL = "http://newsapi.org/v2/top-headlines?country=tr&category=business&apiKey=a82a2ca5af624e08b235d7277250c5ad";
				dispatch({ type: "FETCHING_NEWS" })
				const response = await axios.get(URL)
				dispatch({ type: "FETCHED_NEWS", news: response.data.articles })
			} catch (error) {
				dispatch({ type: "ERROR" })
			}
		}
		getApi()
	}, [])

	if (hasError) return (
		<div>Error</div>
	)

	return (
		<div>
			<div className="Header">
				<header>
					<h1 style={{ color: 'white' }}>Haberler</h1>
					<input className="Input" value={filter} onChange={(e) => dispatch({ type: "FILTER", filter: e.target.value })}></input>
				</header>

			</div>
			<div className="Container">
				{
					isLoading ? (<CircleToBlockLoading color="#282c34" size={50} speed={1} />) :
						(news.filter((item) =>
							item.title.includes(filter)
						).map((item) => (
							<div>
								<NewsCard title={item.title} image={item.urlToImage} newSource={item.source.name} url={item.url} />
							</div>
						)))
				}
			</div>
		</div>

	)
}
export default NewsPage;