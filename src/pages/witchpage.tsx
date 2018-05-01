
//libs
import * as React from 'react';

//components
import Userform from '../controllers/UserForm_validation/userform';
import LangSelect from '../controllers/UserForm_validation/langSelect';
import Timer from '../controllers/UserForm_validation/timer';
import anno from '../utils/annoModule';
import res from '../localization/resourcess';


interface Istates {
   lang: "fi" | "en";
}


export default class WitchPage extends React.Component<any, Istates> {
    constructor(props:any){
        super(props);
        this.state = {
            lang:"en"
        };
    }

    public componentDidMount(){
        res.setLanguage(this.state.lang);
    }

    public onChangeHandler = (e:any) => {
        console.log("changed lang");
        this.setState({
            lang: e.value
        });

        res.setLanguage(e.value);
        
        anno.announce(
            res.formatString(res.changedLang, res.lang), 
            res.changedLangTitle, 
            "info"
        );
    }

    public render() {
        return (
            <div className="page">

                <div className="wrap-15 margin-1-0">
                    <h2>{res.welcome}</h2>

                    <LangSelect onChange={this.onChangeHandler} lang={this.state.lang} />
                    </div>

                    <h1>{res.header}</h1>
                    <p>{res.thisPageIs}</p>
                    <div className="content-centered">
                    <div className="time-wrap">
                        <Timer lang={this.state.lang} />
                    </div>
                    <div className="content-centered-sm">
                        <Userform lang={this.state.lang} res={res} />
                    </div>
                </div>

            </div>
        );
    }
}
