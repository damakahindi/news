import React, { Component } from "react";
import "./App.css";
import { Container, Grid , Divider} from "semantic-ui-react";
import ImageLoader from 'react-load-image';
import spinner from './spinner.gif';

const content = {
  Graduation: `Summary of JKUAT 32nd Graduation Ceremony Event Details
  Below are the JKUAT 32nd Graduation Event details;
  
  Graduation Number: 32nd
  Graduation Date and time: Friday, 30. November, 2018 from 8.00.am
  Rehearsal Dates: Thursday, 29. November 2018 at 10.00 a.
  Location: Graduation Square, Main Campus, Juja
  Examination Results
  The results of examinations sat in the 2017/2018 academic year are available from the offices of the respective Deans, Directors of Schools, Faculty/Campuses /institutes during working hours. Qualified candidates should confirm the inclusion of their names in the graduation list with their respective Deans/Directors, latest Friday, 16. November 2018.
  
  Confirmation of order of   Graduation Names
  The list of graduands for the 32nd Graduation Ceremony will be available on the website www.jkuat.ac.ke. To avoid any penalties, all candidates should confirm the order and correctness of spelling in their name is as they should appear on their certificates before Friday, 16. November 2018.
  
  Graduation Rehearsal Dates
  Graduands wishing to participate in the ceremony MUST attend the rehearsals at the Graduation Square on Thursday, 29. November 2018 at 10.00 a.m. Graduands attending the rehearsal must be seated by the stated hour and be in complete graduation attire. Vital information will be communicated during the rehearsal. Please note that graduation attire will not be issued on the rehearsal day.
  `,
  Timetable:``
}
class Content extends Component {
  render() {
    const { activeItem } = this.props;
    return (
      <div>
        <Container>
          <h1>
            { activeItem } News
          </h1>
          <ImageLoader
            src={`https://source.unsplash.com/700x400/?${activeItem}`}
          >
            <img />
            <div>Error!</div>
            <img src={spinner} style={{height: '700px', width: '400'}} />
          </ImageLoader>
          <div>
            {" "}
            NAIROBI — Ugandan officials have been raising alarms about what 
            they say is a huge buildup of Kenya troops, tanks and artillery 
            pieces along their border that could signal preparations for an 
            invasion. While the Kenya military presence along the border is 
            undisputed, some analysts have questioned its characterization as a 
            buildup that might telegraph an escalation in the war in Western 
            Uganda. Kenya has quartered thousands of troops in the area for 
            nearly five years. The UN and the African Union, while broadly voicing support for Ugandan, have not 
            corroborated the claim of troops massing at the border...
          </div>
        </Container>
        <Divider horizontal> Other segements </Divider>
        <Grid padded="vertically">
          <Grid.Row columns="3">
            <Grid.Column>
              <img
                alt='business'
                src="https://source.unsplash.com/300x200/?wallstreet,graph, business"
                width="100%"
              />
              <h4>Business</h4>
              <p>
                For the first time in decades, every major type of investment
                has fared poorly, as the outlook for economic growth and
                corporate profits is dampened by rising trade tensions...
              </p>
            </Grid.Column>
            <Grid.Column>
              <img
                alt='racing'
                src="https://source.unsplash.com/300x200/?football, racing"
                width="100%"
              />
              <h4>Sports</h4>
              <p>
                Breaking news & live sports coverage including results, video,
                audio and analysis on Football, F1, Cricket, Rugby Union, Rugby
                League, Golf, Tennis and all the...
              </p>
            </Grid.Column>
            <Grid.Column>
              <img
                alt='music'
                src="https://source.unsplash.com/300x200/?music, movies"
                width="100%"
              />
              <h4>Entertainment</h4>
              <p>
                Kicking off our roundups of the best music of 2018, polled from
                votes by more than 50 Guardian music writers, we count down our
                favourite tracks...
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default Content;
