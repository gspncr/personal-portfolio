<form onSubmit={handleSubmit}>
<input type="text" placeholder="email" />
<textarea placeholder="message"></textarea>
<button type="submit">send</button>
{message && <span>thx - got the message!</span>}
</form>