var documenterSearchIndex = {"docs":
[{"location":"api/#Optimisation-Rules","page":"API","title":"Optimisation Rules","text":"","category":"section"},{"location":"api/","page":"API","title":"API","text":"Optimisers.Descent\nOptimisers.Momentum\nOptimisers.Nesterov\nOptimisers.RMSProp\nOptimisers.Adam\nOptimisers.RAdam\nOptimisers.AdaMax\nOptimisers.OAdam\nOptimisers.AdaGrad\nOptimisers.AdaDelta\nOptimisers.AMSGrad\nOptimisers.NAdam\nOptimisers.AdamW\nOptimisers.AdaBelief","category":"page"},{"location":"api/#Optimisers.Descent","page":"API","title":"Optimisers.Descent","text":"Descent(η = 1f-1)\n\nClassic gradient descent optimiser with learning rate η. For each parameter p and its gradient dp, this runs p -= η*dp.\n\nParameters\n\nLearning rate (η): Amount by which gradients are discounted before updating                      the weights.\n\n\n\n\n\n","category":"type"},{"location":"api/#Optimisers.Momentum","page":"API","title":"Optimisers.Momentum","text":"Momentum(η = 1f-2, ρ = 9f-1)\n\nGradient descent optimizer with learning rate η and momentum ρ.\n\nParameters\n\nLearning rate (η): Amount by which gradients are discounted before updating                      the weights.\nMomentum (ρ): Controls the acceleration of gradient descent in the                 prominent direction, in effect dampening oscillations.\n\n\n\n\n\n","category":"type"},{"location":"api/#Optimisers.Nesterov","page":"API","title":"Optimisers.Nesterov","text":"Nesterov(η = 1f-3, ρ = 9f-1)\n\nGradient descent optimizer with learning rate η and Nesterov momentum ρ.\n\nParameters\n\nLearning rate (η): Amount by which gradients are discounted before updating                      the weights.\nNesterov momentum (ρ): Controls the acceleration of gradient descent in the                          prominent direction, in effect dampening oscillations.\n\n\n\n\n\n","category":"type"},{"location":"api/#Optimisers.RMSProp","page":"API","title":"Optimisers.RMSProp","text":"RMSProp(η = 1f-3, ρ = 9f-1, ϵ = eps(typeof(η)); centred = false)\n\nOptimizer using the RMSProp algorithm. Often a good choice for recurrent networks. Parameters other than learning rate generally don't need tuning.\n\nCentred RMSProp is a variant which normalises gradients by an estimate their variance, instead of their second moment.\n\nParameters\n\nLearning rate (η): Amount by which gradients are discounted before updating                      the weights.\nMomentum (ρ): Controls the acceleration of gradient descent in the                 prominent direction, in effect dampening oscillations.\nMachine epsilon (ϵ): Constant to prevent division by zero                        (no need to change default)\nKeyword centred (or centered): Indicates whether to use centred variant                                    of the algorithm.\n\n\n\n\n\n","category":"type"},{"location":"api/#Optimisers.Adam","page":"API","title":"Optimisers.Adam","text":"Adam(η = 1f-3, β = (9f-1, 9.99f-1), ϵ = eps(typeof(η)))\n\nAdam optimiser.\n\nParameters\n\nLearning rate (η): Amount by which gradients are discounted before updating                      the weights.\nDecay of momentums (β::Tuple): Exponential decay for the first (β1) and the                                  second (β2) momentum estimate.\nMachine epsilon (ϵ): Constant to prevent division by zero                        (no need to change default)\n\n\n\n\n\n","category":"type"},{"location":"api/#Optimisers.RAdam","page":"API","title":"Optimisers.RAdam","text":"RAdam(η = 1f-3, β = (9f-1, 9.99f-1), ϵ = eps(typeof(η)))\n\nRectified Adam optimizer.\n\nParameters\n\nLearning rate (η): Amount by which gradients are discounted before updating                      the weights.\nDecay of momentums (β::Tuple): Exponential decay for the first (β1) and the                                  second (β2) momentum estimate.\nMachine epsilon (ϵ): Constant to prevent division by zero                        (no need to change default)\n\n\n\n\n\n","category":"type"},{"location":"api/#Optimisers.AdaMax","page":"API","title":"Optimisers.AdaMax","text":"AdaMax(η = 1f-3, β = (9f-1, 9.99f-1), ϵ = eps(typeof(η)))\n\nAdaMax is a variant of Adam based on the ∞-norm.\n\nParameters\n\nLearning rate (η): Amount by which gradients are discounted before updating                      the weights.\nDecay of momentums (β::Tuple): Exponential decay for the first (β1) and the                                  second (β2) momentum estimate.\nMachine epsilon (ϵ): Constant to prevent division by zero                        (no need to change default)\n\n\n\n\n\n","category":"type"},{"location":"api/#Optimisers.OAdam","page":"API","title":"Optimisers.OAdam","text":"OAdam(η = 1f-3, β = (5f-1, 9f-1), ϵ = eps(typeof(η)))\n\nOAdam (Optimistic Adam) is a variant of Adam adding an \"optimistic\" term suitable for adversarial training.\n\nParameters\n\nLearning rate (η): Amount by which gradients are discounted before updating                      the weights.\nDecay of momentums (β::Tuple): Exponential decay for the first (β1) and the                                  second (β2) momentum estimate.\nMachine epsilon (ϵ): Constant to prevent division by zero                        (no need to change default)\n\n\n\n\n\n","category":"type"},{"location":"api/#Optimisers.AdaGrad","page":"API","title":"Optimisers.AdaGrad","text":"AdaGrad(η = 1f-1, ϵ = eps(typeof(η)))\n\nAdaGrad optimizer. It has parameter specific learning rates based on how frequently it is updated. Parameters don't need tuning.\n\nParameters\n\nLearning rate (η): Amount by which gradients are discounted before updating                      the weights.\nMachine epsilon (ϵ): Constant to prevent division by zero                        (no need to change default)\n\n\n\n\n\n","category":"type"},{"location":"api/#Optimisers.AdaDelta","page":"API","title":"Optimisers.AdaDelta","text":"AdaDelta(ρ = 9f-1, ϵ = eps(typeof(ρ)))\n\nAdaDelta is a version of AdaGrad adapting its learning rate based on a window of past gradient updates. Parameters don't need tuning.\n\nParameters\n\nRho (ρ): Factor by which the gradient is decayed at each time step.\nMachine epsilon (ϵ): Constant to prevent division by zero                        (no need to change default)\n\n\n\n\n\n","category":"type"},{"location":"api/#Optimisers.AMSGrad","page":"API","title":"Optimisers.AMSGrad","text":"AMSGrad(η = 1f-3, β = (9f-1, 9.99f-1), ϵ = eps(typeof(η)))\n\nThe AMSGrad version of the Adam optimiser. Parameters don't need tuning.\n\nParameters\n\nLearning rate (η): Amount by which gradients are discounted before updating                      the weights.\nDecay of momentums (β::Tuple): Exponential decay for the first (β1) and the                                  second (β2) momentum estimate.\nMachine epsilon (ϵ): Constant to prevent division by zero                        (no need to change default)\n\n\n\n\n\n","category":"type"},{"location":"api/#Optimisers.NAdam","page":"API","title":"Optimisers.NAdam","text":"NAdam(η = 1f-3, β = (9f-1, 9.99f-1), ϵ = eps(typeof(η)))\n\nNAdam is a Nesterov variant of Adam. Parameters don't need tuning.\n\nParameters\n\nLearning rate (η): Amount by which gradients are discounted before updating                      the weights.\nDecay of momentums (β::Tuple): Exponential decay for the first (β1) and the                                  second (β2) momentum estimate.\nMachine epsilon (ϵ): Constant to prevent division by zero                        (no need to change default)\n\n\n\n\n\n","category":"type"},{"location":"api/#Optimisers.AdamW","page":"API","title":"Optimisers.AdamW","text":"AdamW(η = 1f-3, β = (9f-1, 9.99f-1), γ = 0, ϵ = eps(typeof(η)))\n\nAdamW is a variant of Adam fixing (as in repairing) its weight decay regularization.\n\nParameters\n\nLearning rate (η): Amount by which gradients are discounted before updating                      the weights.\nDecay of momentums (β::Tuple): Exponential decay for the first (β1) and the                                  second (β2) momentum estimate.\nWeight decay (γ): Decay applied to weights during optimisation.\nMachine epsilon (ϵ): Constant to prevent division by zero                        (no need to change default)\n\n\n\n\n\n","category":"function"},{"location":"api/#Optimisers.AdaBelief","page":"API","title":"Optimisers.AdaBelief","text":"AdaBelief(η = 1f-3, β = (9f-1, 9.99f-1), ϵ = 1e-16)\n\nThe AdaBelief optimiser is a variant of the well-known Adam optimiser.\n\nParameters\n\nLearning rate (η): Amount by which gradients are discounted before updating                      the weights.\nDecay of momentums (β::Tuple): Exponential decay for the first (β1) and the                                  second (β2) momentum estimate.\nMachine epsilon (ϵ::Float32): Constant to prevent division by zero                                 (no need to change default)\n\n\n\n\n\n","category":"type"},{"location":"api/","page":"API","title":"API","text":"In addition to the main course, you may wish to order some of these condiments:","category":"page"},{"location":"api/","page":"API","title":"API","text":"Optimisers.ClipGrad\nOptimisers.ClipNorm\nOptimisers.WeightDecay\nOptimisers.OptimiserChain","category":"page"},{"location":"api/#Optimisers.ClipGrad","page":"API","title":"Optimisers.ClipGrad","text":"ClipGrad(δ = 10f0)\n\nRestricts every gradient component to obey -δ ≤ dx[i] ≤ δ.\n\nSee also ClipNorm.\n\n\n\n\n\n","category":"type"},{"location":"api/#Optimisers.ClipNorm","page":"API","title":"Optimisers.ClipNorm","text":"ClipNorm(ω = 10f0, p = 2; throw = true)\n\nScales any gradient array for which norm(dx, p) > ω to stay at this threshold (unless p==0).\n\nThrows an error if the norm is infinite or NaN, which you can turn off with throw = false.\n\nSee also ClipGrad.\n\n\n\n\n\n","category":"type"},{"location":"api/#Optimisers.WeightDecay","page":"API","title":"Optimisers.WeightDecay","text":"WeightDecay(γ = 5f-4)\n\nDecay weights by γ, that is, add γ .* x to the gradient x̄ which will be subtracted from x.\n\nTypically composed  with other optimisers as the first transformation in an OptimiserChain. This is equivalent to adding L_2 regularization with coefficient γ to the loss.\n\nParameters\n\nWeight decay (γ): Decay applied to weights during optimisation.\n\n\n\n\n\n","category":"type"},{"location":"api/#Optimisers.OptimiserChain","page":"API","title":"Optimisers.OptimiserChain","text":"OptimiserChain(opts...)\n\nCompose a sequence of optimisers so that each opt in opts updates the gradient, in the order specified.\n\nWith an empty sequence, OptimiserChain() is the identity, so update! will subtract the full gradient from the parameters. This is equivalent to Descent(1).\n\nExample\n\njulia> o = OptimiserChain(ClipGrad(1), Descent(0.1));\n\njulia> m = (zeros(3),);\n\njulia> s = Optimisers.setup(o, m)\n(Leaf(OptimiserChain(ClipGrad{Int64}(1), Descent{Float64}(0.1)), [nothing, nothing]),)\n\njulia> Optimisers.update(s, m, ([0.3, 1, 7],))[2]  # clips before discounting\n([-0.03, -0.1, -0.1],)\n\n\n\n\n\n","category":"type"},{"location":"api/#Model-Interface","page":"API","title":"Model Interface","text":"","category":"section"},{"location":"api/","page":"API","title":"API","text":"Optimisers.setup\nOptimisers.update\nOptimisers.update!","category":"page"},{"location":"api/#Optimisers.setup","page":"API","title":"Optimisers.setup","text":"Optimisers.setup(rule, model) -> tree\n\nInitialises the given optimiser for every trainable parameter within the model. Returns a tree of the relevant states, which must be passed to update or update!.\n\nExample\n\njulia> m = (x = rand(3), y = (true, false), z = tanh);\n\njulia> Optimisers.setup(Momentum(), m)  # same field names as m\n(x = Leaf(Momentum{Float32}(0.01, 0.9), [0.0, 0.0, 0.0]), y = (nothing, nothing), z = nothing)\n\nThe recursion into structures uses Functors.jl, and any new structs containing parameters need to be marked with Functors.@functor before use. See the Flux docs for more about this.\n\njulia> struct Layer; mat; fun; end\n\njulia> model = (lay = Layer([1 2; 3 4f0], sin), vec = [5, 6f0]);\n\njulia> Optimisers.setup(Momentum(), model)  # new struct is by default ignored\n(lay = nothing, vec = Leaf(Momentum{Float32}(0.01, 0.9), [0.0, 0.0]))\n\njulia> destructure(model)\n(Float32[5.0, 6.0], Restructure(NamedTuple, ..., 2))\n\njulia> using Functors; @functor Layer  # annotate this type as containing parameters\n\njulia> Optimisers.setup(Momentum(), model)\n(lay = (mat = Leaf(Momentum{Float32}(0.01, 0.9), [0.0 0.0; 0.0 0.0]), fun = nothing), vec = Leaf(Momentum{Float32}(0.01, 0.9), [0.0, 0.0]))\n\njulia> destructure(model)\n(Float32[1.0, 3.0, 2.0, 4.0, 5.0, 6.0], Restructure(NamedTuple, ..., 6))\n\n\n\n\n\n","category":"function"},{"location":"api/#Optimisers.update","page":"API","title":"Optimisers.update","text":"Optimisers.update(tree, model, gradient) -> (tree, model)\n\nUses the optimiser and the gradient to change the trainable parameters in the model. Returns the improved model, and the optimiser states needed for the next update. The initial tree of states comes from setup.\n\nSee also update!, which will be faster for models of ordinary Arrays or CuArrays.\n\nExample\n\njulia> m = (x = Float32[1,2,3], y = tanh);\n\njulia> t = Optimisers.setup(Descent(0.1f0), m)\n(x = Leaf(Descent{Float32}(0.1), nothing), y = nothing)\n\njulia> g = (x = [1,1,1], y = nothing);  # fake gradient\n\njulia> Optimisers.update(t, m, g)\n((x = Leaf(Descent{Float32}(0.1), nothing), y = nothing), (x = Float32[0.9, 1.9, 2.9], y = tanh))\n\n\n\n\n\n","category":"function"},{"location":"api/#Optimisers.update!","page":"API","title":"Optimisers.update!","text":"Optimisers.update!(tree, model, gradient) -> (tree, model)\n\nUses the optimiser and the gradient to change the trainable parameters in the model. Returns the improved model, and the optimiser states needed for the next update. The initial tree of states comes from setup.\n\nThis is used in exactly the same manner as update, but because it may mutate arrays within the old model (and the old state), it will be faster for models of ordinary Arrays or CuArrays. However, you should not rely on the old model being fully updated but rather use the returned model.\n\nExample\n\n```jldoctest julia> using StaticArrays, Zygote, Optimisers\n\njulia> m = (x = [1f0, 2f0], y = SA[4f0, 5f0]);  # partly mutable model\n\njulia> t = Optimisers.setup(Momentum(1/30, 0.9), m);\n\njulia> g = gradient(m -> sum(abs2.(m.x .+ m.y)), m)1\n\njulia> t2, m2 = Optimisers.update!(t, m, g);\n\njulia> m2  # after update or update!, this is the new model (x = Float32[0.6666666, 1.5333333], y = Float32[3.6666667, 4.5333333])\n\njulia> m2.x === m.x  # update! has re-used this array, for efficiency true\n\njulia> m  # original should be discarded, may be mutated but no guarantee (x = Float32[0.6666666, 1.5333333], y = Float32[4.0, 5.0])\n\njulia> t  # original state should likewise be discarded (x = Leaf(Momentum{Float64}(0.0333333, 0.9), Float32[0.333333, 0.466667]), y = Leaf(Momentum{Float64}(0.0333333, 0.9), Float32[0.0, 0.0]))\n\n\n\n\n\n","category":"function"},{"location":"api/","page":"API","title":"API","text":"Calling Functors.@functor on your model's layer types by default causes the optimiser to act on all suitable fields. To restrict this, define trainable:","category":"page"},{"location":"api/","page":"API","title":"API","text":"Optimisers.trainable","category":"page"},{"location":"api/#Optimisers.trainable","page":"API","title":"Optimisers.trainable","text":"trainable(x::Layer) -> NamedTuple\n\nThis should be overloaded to make optimisers ignore some fields of every Layer, which would otherwise contain trainable parameters. (Elements such as functions and sizes are always ignored.)\n\nThe default is Functors.children(x), usually a NamedTuple of all fields, and trainable(x) must contain a subset of these.\n\n\n\n\n\n","category":"function"},{"location":"api/","page":"API","title":"API","text":"Such restrictions are also obeyed by this function for flattening a model:","category":"page"},{"location":"api/","page":"API","title":"API","text":"Optimisers.destructure\nOptimisers.Restructure","category":"page"},{"location":"api/#Optimisers.destructure","page":"API","title":"Optimisers.destructure","text":"destructure(model) -> vector, reconstructor\n\nCopies all trainable, isnumeric parameters in the model to a vector, and returns also a function which reverses this transformation. Differentiable.\n\nExample\n\njulia> v, re = destructure((x=[1.0, 2.0], y=(sin, [3 + 4im])))\n(ComplexF64[1.0 + 0.0im, 2.0 + 0.0im, 3.0 + 4.0im], Restructure(NamedTuple, ..., 3))\n\njulia> re([3, 5-im, 7+11im])\n(x = [3.0, 5.0], y = (sin, ComplexF64[7.0 + 11.0im]))\n\n\n\n\n\n","category":"function"},{"location":"api/#Optimisers.Restructure","page":"API","title":"Optimisers.Restructure","text":"Restructure(Model, ..., length)\n\nThis is what destructure returns, and re(p) will re-build the model with new parameters from vector p. If the model is callable, then re(x, p) == re(p)(x).\n\nExample\n\njulia> using Flux, Optimisers\n\njulia> _, re = destructure(Dense([1 2; 3 4], [0, 0], sigmoid))\n([1, 3, 2, 4, 0, 0], Restructure(Dense, ..., 6))\n\njulia> m = re(-4:1)\nDense(2, 2, σ)      # 6 parameters\n\njulia> m([0.2, 0.3]) ≈ re([0.2, 0.3], -4:1)\ntrue\n\n\n\n\n\n","category":"type"},{"location":"api/#Rule-Definition","page":"API","title":"Rule Definition","text":"","category":"section"},{"location":"api/","page":"API","title":"API","text":"Optimisers.apply!\nOptimisers.init\nOptimisers.@..\nOptimisers.@lazy","category":"page"},{"location":"api/#Optimisers.apply!","page":"API","title":"Optimisers.apply!","text":"Optimisers.apply!(rule::RuleType, state, parameters, gradient) -> (state, gradient)\n\nThis defines the action of any optimisation rule. It should return the modified gradient which will be subtracted from the parameters, and the updated state (if any) for use at the next iteration, as a tuple (state, gradient).\n\nFor efficiency it is free to mutate the old state, but only what is returned will be used. Ideally this should check iswriteable(x), which the built-in rules do via @...\n\nThe initial state is init(rule::RuleType, parameters).\n\nExample\n\njulia> Optimisers.init(Descent(0.1), Float32[1,2,3]) === nothing\ntrue\n\njulia> Optimisers.apply!(Descent(0.1), nothing, Float32[1,2,3], [4,5,6])\n(nothing, Base.Broadcast.Broadcasted{Base.Broadcast.DefaultArrayStyle{1}}(*, ([4, 5, 6], 0.1f0)))\n\n\n\n\n\n","category":"function"},{"location":"api/#Optimisers.init","page":"API","title":"Optimisers.init","text":"Optimisers.init(rule::RuleType, parameters) -> state\n\nSets up the initial state for a given optimisation rule, and an array of parameters. This and apply! are the two functions which any new optimisation rule must define.\n\nExamples\n\njulia> Optimisers.init(Descent(), Float32[1,2,3])  # is `nothing`\n\njulia> Optimisers.init(Momentum(), [1.0, 2.0])\n2-element Vector{Float64}:\n 0.0\n 0.0\n\n\n\n\n\n","category":"function"},{"location":"api/#Optimisers.@..","page":"API","title":"Optimisers.@..","text":"@.. x = x + y\n\nSometimes in-place broadcasting macro, for use in apply! rules. If iswriteable(x) then it is just @. x = rhs, but if not, it becomes x = @. rhs.\n\n\n\n\n\n","category":"macro"},{"location":"api/#Optimisers.@lazy","page":"API","title":"Optimisers.@lazy","text":"x = @lazy y + z\n\nLazy broadcasting macro, for use in apply! rules. It broadcasts like @. but does not materialise, returning a Broadcasted object for later use. Beware that mutation of arguments will affect the result, and that if it is used in two places, work will be done twice.\n\n\n\n\n\n","category":"macro"},{"location":"#Optimisers.jl","page":"Home","title":"Optimisers.jl","text":"","category":"section"},{"location":"#Defining-an-optimisation-rule","page":"Home","title":"Defining an optimisation rule","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"A new optimiser must overload two functions, apply! and init. These act on one array of parameters:","category":"page"},{"location":"","page":"Home","title":"Home","text":"# Define a container to hold any optimiser specific parameters (if any):\nstruct DecayDescent{T} <: Optimisers.AbstractRule\n  η::T\nend\n\n# Define an `apply!` rule which encodes how the gradients will be used to\n# update the parameters:\nfunction Optimisers.apply!(o::DecayDescent, state, x, x̄)\n  newx̄ = (o.η / √state) .* x̄\n  nextstate = state + 1\n  return nextstate, newx̄\nend\n\n# Define the function which sets up the initial state (if any):\nOptimisers.init(o::DecayDescent, x::AbstractArray) = 1","category":"page"},{"location":"","page":"Home","title":"Home","text":"The parameters will be immediately updated to x .- newx̄, while nextstate is caried to the next iteration.","category":"page"},{"location":"","page":"Home","title":"Home","text":"Notice that the state is handled separately from the optimiser itself. This is a key design principle and allows users to manage their own state explicitly. It of course also makes it easier to store the state.","category":"page"},{"location":"#Usage-with-[Flux.jl](https://github.com/FluxML/Flux.jl)","page":"Home","title":"Usage with Flux.jl","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"To apply such an optimiser to a whole model, setup builds a tree containing any initial state for every trainable array. Then at each step, update uses this and the gradient to adjust the model:","category":"page"},{"location":"","page":"Home","title":"Home","text":"\nusing Flux, Metalhead, Optimisers\n\nmodel = Metalhead.ResNet(18) |> gpu  # define a model to train\nimage = rand(Float32, 224, 224, 3, 1) |> gpu;  # dummy data\n@show sum(model(image));  # dummy loss function\n\nrule = Optimisers.Adam()  # use the Adam optimiser with its default settings\nstate = Optimisers.setup(rule, model);  # initialise this optimiser's momentum etc.\n\n∇model, _ = gradient(model, image) do m, x  # calculate the gradients\n  sum(m(x))\nend;\n\nstate, model = Optimisers.update(state, model, ∇model);\n@show sum(model(image));\n","category":"page"},{"location":"","page":"Home","title":"Home","text":"Notice that a completely new instance of the model is returned. Internally, this is handled by Functors.jl, where we do a walk over the tree formed by the model and update the parameters using the gradients.","category":"page"},{"location":"","page":"Home","title":"Home","text":"Optimisers.jl does not depend on any one automatic differentiation package, but for now the most likely source of gradients is Zygote.jl. Note that update always wants the gradient from Zygote's \"explicit\" mode, as shown above. This ∇model is another tree structure, rather than the dictionary-like object from  Zygote's \"implicit\" mode gradient(() -> loss(...), Flux.params(model)) – see  Zygote's documentation for more about this difference.","category":"page"},{"location":"","page":"Home","title":"Home","text":"There is also Optimisers.update! which similarly returns a new model and new state, but is free to mutate arrays within the old one for efficiency. The method of apply! you write is likewise free to mutate arrays within its state; they are defensively copied when this rule is used with update.","category":"page"},{"location":"#Usage-with-[Lux.jl](https://github.com/avik-pal/Lux.jl)","page":"Home","title":"Usage with Lux.jl","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"The main design difference of Lux is that the tree of parameters is separate from the layer structure. It is these parameters which setup and update need to know about.","category":"page"},{"location":"","page":"Home","title":"Home","text":"Lux describes this separation of parameter storage from model description as \"explicit\" parameters. Beware that it has nothing to do with Zygote's notion of \"explicit\" gradients. (If the same model is written in Flux and Lux, ∇model above and ∇params below will often be identical trees of nested NamedTuples.)","category":"page"},{"location":"","page":"Home","title":"Home","text":"\nusing Lux, Boltz, Zygote, Optimisers\n\nlux_model, params, lux_state = Boltz.resnet(:resnet18) |> gpu;  # define and initialise model\nimages = rand(Float32, 224, 224, 3, 4) |> gpu;  # batch of dummy data\ny, _ = Lux.apply(lux_model, images, params, lux_state);  # run the model\n@show sum(y)  # initial dummy loss\n\nrule = Optimisers.Adam()\nopt_state = Optimisers.setup(rule, params);  # optimiser state based on model parameters\n\n∇params, _ = gradient(params, images) do p, x  # gradient with respect to parameter tree\n  y, _ = Lux.apply(lux_model, x, p, lux_state)\n  sum(y)\nend;\n\nopt_state, params = Optimisers.update!(opt_state, params, ∇params);\n\ny, _ = Lux.apply(lux_model, images, params, lux_state);\n@show sum(y)\n","category":"page"},{"location":"","page":"Home","title":"Home","text":"Besides the parameters stored in params and gradually optimised, any other model state is stored in lux_state. For simplicity this example does not show how to propagate the  updated lux_state to the next iteration, see Lux's documentation.","category":"page"},{"location":"#Obtaining-a-flat-parameter-vector","page":"Home","title":"Obtaining a flat parameter vector","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Instead of a nested tree-like structure, sometimes is is convenient to have all the parameters as one simple vector. Optimisers.jl contains a function destructure which creates this vector, and also creates way to re-build the original structure with new parameters. Both flattening and re-building may be used within gradient calls.","category":"page"},{"location":"","page":"Home","title":"Home","text":"An example with Flux's model:","category":"page"},{"location":"","page":"Home","title":"Home","text":"using ForwardDiff  # an example of a package which only likes one array\n\nmodel = Chain(  # much smaller model example, as ForwardDiff is a slow algorithm here\n          Conv((3, 3), 3 => 5, pad=1, bias=false), \n          BatchNorm(5, relu), \n          Conv((3, 3), 5 => 3, stride=16),\n        )\nimage = rand(Float32, 224, 224, 3, 1);\n@show sum(model(image));\n\nflat, re = destructure(model)\nst = Optimisers.setup(rule, flat)  # state is just one Leaf now\n\n∇flat = ForwardDiff.gradient(flat) do v\n  m = re(v)      # rebuild a new object like model\n  sum(m(image))  # call that as before\nend\n\nst, flat = Optimisers.update(st, flat, ∇flat)\n@show sum(re(flat)(image));","category":"page"},{"location":"","page":"Home","title":"Home","text":"Here flat contains only the 283 trainable parameters, while the non-trainable ones are preserved inside re. When defining new layers, these can be specified if necessary by overloading trainable. By default, all numeric arrays visible to Functors.jl are assumed to contain trainable parameters.","category":"page"},{"location":"","page":"Home","title":"Home","text":"Lux stores only the trainable parameters in params. This can also be flattened to a plain Vector in the same way:","category":"page"},{"location":"","page":"Home","title":"Home","text":"params, lux_state = Lux.setup(Random.default_rng(), lux_model);\n\nflat, re = destructure(params)\n\n∇flat = ForwardDiff.gradient(flat) do v\n  p = re(v)  # rebuild an object like params\n  y, _ = Lux.apply(lux_model, images, p, lux_state)\n  sum(y)\nend","category":"page"}]
}
