import React from 'react';

const ImputTextForm = (props) => {
  return (
    <form onSubmit={props.onSubmit}>
      <label>
        Main:
        <textarea value={props.value} onChange={props.onChange} />
      </label>
      <input type='submit' value={'submit'} />
    </form>
  );
};

// const styles = StyleSheet.create({

// });

export default ImputTextForm;
