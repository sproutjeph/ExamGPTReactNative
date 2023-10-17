import {axiosInstance} from '@utils/axiosInstance';
import {useQuery} from '@tanstack/react-query';
import {queryKeys} from '@utils/constants';
import {IQuestion} from '@utils/types';

interface IAxiosReturnType {
  message: string;
  data: IQuestion[];
}

async function getQuestionsByQuery(
  examType: string,
  examYear: string,
  subject: string,
): Promise<IAxiosReturnType> {
  const {data} = await axiosInstance.get(
    `/get-questions/${examType}/${examYear}/${subject}`,
  );

  return data;
}

export function useQuestion(
  examType: string,
  examYear: string,
  subject: string,
) {
  const {
    data: questions,
    isLoading,
    error,
    isSuccess,
  } = useQuery([queryKeys.questions, examType, examYear, subject], () =>
    getQuestionsByQuery(examType, examYear, subject),
  );

  return {questions, isLoading, error, isSuccess};
}
