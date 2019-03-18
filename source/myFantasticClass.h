namespace mine
{
  /**
   * 내가 만든 완벽한 C++ 클래스.
   *
   * 생성 후에는 반드시 `CallMe()`를 호출해야 합니다.
   */
  class MyFantasticClass
  {
    public:
      /**
       * 용건 있을 때 전화해달라는 함수.
       */
      void CallMe(void);

      /**
       * 내 질문에 대답하게 하는 함수.
       * @question 내가 한 질문. null이면 반드시 false를 반환합니다.
       * @return 질문에 대한 응답. 응답이 "그렇다"면 true, "아니다"면 false를 반환합니다.
       */
      bool AnswerMe(char *question);
      ...
  };
}
