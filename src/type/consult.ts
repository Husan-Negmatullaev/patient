export interface consult {
  id: number;
  status: number;
  time: {
    timeRemaining?: string;
    date: string;
    timeRange?: string;
    sentTime?: string;
    timeLeft?: string;
  };
  type: string;
  doctor: {
    img: number;
    name: string;
    faculty: string;
    rating: number;
    feedback: number;
    isOnline: boolean;
    careTeam: boolean;
  };
  consultDetails?: {
    price: number;
    questionDetails: {
      askFor: string;
      question: string;
      questionImage?: null | {
        uri: any;
        title: string;
        uploadTime: string;
      };
    };
    answerDetails?: {
      date: string;
      time: string;
      answerOne: string;
      answerTwo: string;
      answerImage?: any;
    };
    prescription?: {
      title: string;
      detail: string;
    };
  };
  additionalInformation: {
    diagnosedConditions?: null | {
      value: string;
      time: string;
    };
    medications?: null | {
      value: string;
      time: string;
    };
    allergies?: null | {
      value: string;
      time: string;
    };
  };
}
