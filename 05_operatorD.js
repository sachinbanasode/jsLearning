console.log("======Quation no 1 ===========");

function tcsInterviewEligibility(gradScore, hscScore, sscScore, candidateName) {
   var eligibility= gradScore>=70 || hscScore>=80 || sscScore > 90 
    ? `Congrates ${candidateName} you are elegible for TCS interview`
    : `${candidateName}Unfortunately you are not eligible for interview`
   console.log(eligibility);
    
}
tcsInterviewEligibility(80, 86, 90, "Yogesh");
tcsInterviewEligibility(80, 86, 90, "Mahesh");
tcsInterviewEligibility(80, 86, 90, "Santosh");

