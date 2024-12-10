@extends('layout')

@section('content')
    <div class="container py-4 py-lg-5 my-4">
        <div class="row">
            <div class="col-md-6">
                <div class="card border-0 shadow">
                    <div class="card-body">
                        <h2 class="h4 mb-1">Sign in</h2>
                        <div class="py-3">
                            <h3 class="d-inline-block align-middle fs-base fw-medium mb-2 me-2">With social account:</h3>
                            <div class="d-inline-block align-middle"><a class="btn-social bs-google me-2 mb-2" href="#" data-bs-toggle="tooltip" title="Sign in with Google"><i class="ci-google"></i></a><a class="btn-social bs-facebook me-2 mb-2" href="#" data-bs-toggle="tooltip" title="Sign in with Facebook"><i class="ci-facebook"></i></a><a class="btn-social bs-twitter me-2 mb-2" href="#" data-bs-toggle="tooltip" title="Sign in with Twitter"><i class="ci-twitter"></i></a></div>
                        </div>
                        <hr>
                        <h3 class="fs-base pt-4 pb-2">Or using form below</h3>
                        <form method="post" action={{route('authenticate')}} >
                            @csrf
                            <div class="input-group mb-3"><i class="ci-mail position-absolute top-50 translate-middle-y text-muted fs-base ms-3"></i>
                                <input class="form-control rounded-start" name="email" type="email" placeholder="Email" >
                            </div>
                            <div class="input-group mb-3"><i class="ci-locked position-absolute top-50 translate-middle-y text-muted fs-base ms-3"></i>
                                <div class="password-toggle w-100">
                                    <input class="form-control" type="password" placeholder="Password" name="password" >
                                    <label class="password-toggle-btn" aria-label="Show/hide password">
                                        <input class="password-toggle-check" type="checkbox"><span class="password-toggle-indicator"></span>
                                    </label>
                                </div>
                                @if($errors->has('err'))

                                <div style="color: red; font-size: 10px">{{$errors->get('err')[0]}}</div>
                                @endif
                            </div>
                            <div class="d-flex flex-wrap justify-content-between">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" checked id="remember_me">
                                    <label class="form-check-label" for="remember_me">Remember me</label>
                                </div><a class="nav-link-inline fs-sm" href="account-password-recovery.html">Forgot password?</a>
                            </div>
                            <hr class="mt-4">
                            <div class="text-end pt-4">
                                <button class="btn btn-primary" type="submit"><i class="ci-sign-in me-2 ms-n21"></i>Sign In</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div class="col-md-6 pt-4 mt-3 mt-md-0">
                <h2 class="h4 mb-3">No account? Sign up</h2>
                <p class="fs-sm text-muted mb-4">Registration takes less than a minute but gives you full control over your orders.</p>
                <form   method="post" action={{route('signup')}}>
                    @csrf
                    <div class="row gx-4 gy-3">
                        <div class="col-sm-6">
                            <label class="form-label" for="reg-fn">First Name</label>
                            <input class="form-control" type="text" name="name" value="{{old("name")}}"  id="reg-fn">
                            @error('name')
                            <div style="color: red; font-size: 10px">{{$message}}</div>
                            @enderror
                        </div>

                        <div class="col-sm-6">
                            <label class="form-label" for="reg-email">E-mail Address</label>
                            <input class="form-control" type="email" name="email" value="{{old("email")}}"  id="reg-email">
                            @error('email')
                            <div style="color: red; font-size: 10px">{{$message}}</div>
                            @enderror
                        </div>
                        <div class="col-sm-6">
                            <label class="form-label" for="reg-phone">Phone Number</label>
                            <input class="form-control" type="text"  name="phoneNo" value="{{old("phone")}}" id="reg-phone">

                                @error('phone')
                                <div style="color: red; font-size: 10px">{{$message}}</div>
                                @enderror


                            <div class="invalid-feedback">Please enter your phone number!</div>
                        </div>
                        <div class="col-sm-6">
                            <label class="form-label" for="reg-password">Password</label>
                            <input class="form-control" type="password" name="password"  id="reg-password">
                            @if($errors->any())
                                @error('password')
                                    <div style="color: red; font-size: 10px">{{$message}}</div>
                                 @enderror
                            @else
                                <div style="color: silver; font-size: 10px">min of 5 char, atleast one lowercase</div>
                            @endif

                        </div>
                        <div class="col-sm-12">
                            <label class="form-label" for="Address">Confirm Password</label>
                            <textarea class="form-control"  name="address" required id="address">
                                {{old('address')}}
                            </textarea>
                            @error('address')
                            <div style="color: red; font-size: 10px">{{$message}}</div>
                            @enderror

                        </div>
                        <div class="col-12 text-end">
                            <button class="btn btn-primary" type="submit"><i class="ci-user me-2 ms-n1"></i>Sign Up</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>

@endsection
