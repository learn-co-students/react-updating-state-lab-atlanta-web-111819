// Code YouTubeDebugger Component Here
import React, { Component } from 'react'

export default class YouTubeDebugger extends Component{
    constructor(){
        super()
        this.state={
            errors: [],
            user: null,
            settings : {
                bitrate: 8,
                video: {
                    resolution: '1080p'
                }
            }
        }
    }

    bitUpdate = (e)=>{
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12
            }
        })
    }

    resUpdate =(e)=>{
        this.setState({
            settings: {
                ...this.state.settings,
                video: {
                    resolution: '720p'
                }
            }
        })
    }

    render(){
        return(
            <div>
                <button onClick={this.bitUpdate}
                className='bitrate'></button>
                <button onClick={this.resUpdate}
                className='resolution'></button>
            </div>
        )
    }
}
