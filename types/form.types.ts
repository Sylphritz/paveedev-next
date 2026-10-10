/*
 * If you need additional parameters,
 * use `action.bind(null, param1, param2, ...)`
 */
export type LocalizedFormAction<State> = (
  locale: string,
  initialState: Awaited<State>,
  formData: FormData,
) => State | Promise<State>
